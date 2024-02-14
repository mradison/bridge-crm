const { concatAST } = require('graphql');
const { User, Contact, Group, Activity } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
        return User.find().populate('contact');
    },
    user: async (parent, { username }) => {
        return User.findOne({ username: username }).populate('contact');
    },
    contacts: async () => {
        return Contact.find().populate();
    },
    contact: async (parent, { contactid }) => {
        return Contact.findOne({ _id: contactid }).populate();
    },
    groups: async () => {
        return Group.find().populate();
    },
    group: async (parent, { groupid }) => {
        return Group.findOne({ _id: groupid }).populate();
    },
    activities: async () => {
        return Activity.find().populate();
    },
    activity: async (parent, { activityid }) => {
        return Activity.findOne({ _id: activityid }).populate();
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addContact: async (parent, { newContact }, context) => {
      if (context.user) {
        const contact = await Contact.create({
          name: newContact.name,
          nickname: newContact.nickname,
          email: newContact.email,
          company: newContact.company,
          title: newContact.title,
          department: newContact.department,
          businessphone: newContact.businessphone,
          mobilephone: newContact.mobilephone,
          address1: newContact.address1,
          address2: newContact.address2,
          city: newContact.city,
          state: newContact.state,
          country: newContact.country,
          zip: newContact.zip,
          website: newContact.website,
        });
        
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { contact: contact._id } }
        );

        return contact;
      }
      throw AuthenticationError; 
    }
      ,    
    updatecontactGroup: async (parent, { newGroupInfo, contactId }, context) => {
        if (context.user) {
          const groupData = {
            groupId: newGroupInfo.groupId,
            name: newGroupInfo.name,
            description: newGroupInfo.description
          };
          console.log("***********************************");
          console.log(groupData);
          const updatedContact = await Contact.findByIdAndUpdate(
            { _id: contactId },
            { $push: { groupInfo: groupData }},
            { new: true }
          );
          return updatedContact;
        }
        throw new AuthenticationError('You need to be logged in!');
     }
      ,
      updatecontactActivity: async (parent, { newActivityInfo, contactId }, context) => {
        if (context.user) {
          const updatedContact = await Contact.findByIdAndUpdate(
            { _id: contactId },
            { $push: { activityInfo: newActivityInfo }},
            { new: true }
          );
          return updatedContact;
        }
         throw new AuthenticationError('You need to be logged in!');
     }
    ,
    addActivity: async (parent, { newActivity }, context) => {
        if (context.user) {
          const activity = await Activity.create({
            type: newActivity.type,
            subject: newActivity.subject,
            description: newActivity.description,
            activitydate: newActivity.activitydate
          }); 
        
  
          return activity;
        }
       throw AuthenticationError;
       }
    ,  
    addGroup: async (parent, { newGroup }, context) => {
        if (context.user) {
          const group = await Group.create({
            name: newGroup.name,
            description: newGroup.description
          });
            
          return group;
        }
        throw AuthenticationError;
     }
    ,  
    deleteContact: async (parent, { contactid }, context) => {
      if (context.user) {
        const contact = await Contact.findOneAndDelete({
          _id: contactid
        },
        { new: true });
        return contact;
      }
      throw AuthenticationError;
    }
    ,
    deleteActivity: async (parent, { activityid }, context) => {
        if (context.user) {
          const activity = await Activity.findOneAndDelete({
            _id: activityid
          },
          { new: true });
          return activity;
        }
        throw AuthenticationError;
    }
    ,
    deleteGroup: async (parent, { groupid }, context) => {
        if (context.user) {
          const group = await Group.findOneAndDelete({
            _id: groupid
          },
          { new: true });
          return group;
        }
         throw AuthenticationError;
     }
    ,
    updateContactInfo: async (parent, { newContactInfo, contactid }, context) => {
      if (context.user) {
        const updateContact = await Contact.findByIdAndUpdate(contactid,
          { 
          name: newContactInfo.name,
          nickname: newContactInfo.nickname,
          email: newContactInfo.email,
          company: newContactInfo.company,
          title: newContactInfo.title,
          department: newContactInfo.department,
          businessphone: newContactInfo.businessphone,
          mobilephone: newContactInfo.mobilephone,
          address1: newContactInfo.address1,
          address2: newContactInfo.address2,
          city: newContactInfo.city,
          state: newContactInfo.state,
          country: newContactInfo.country,
          zip: newContactInfo.zip,
          website: newContactInfo.website},
          { new: true }
        );
        return updateContact;
      }
       throw new AuthenticationError('You need to be logged in!');
   }
      ,
    updateActivityInfo: async (parent, { newActivityInfo, activityid }, context) => {
      if (context.user) {
        const updateActivity = await Activity.findByIdAndUpdate( activityid,
          { type: newActivityInfo.type,
            subject: newActivityInfo.subject,
            description: newActivityInfo.description,
            activitydate: newActivityInfo.activitydate},
          { new: true }
        );
        return updateActivity;
      }
       throw new AuthenticationError('You need to be logged in!');
   }
      ,
      updateGroupInfo: async (parent, {newGroupInfo, groupid }, context) => {
        if (context.user) {
          const updateGroup = await Group.findByIdAndUpdate(groupid,
            {name: newGroupInfo.name, description: newGroupInfo.description} ,    
            { new: true }
          );
          return updateGroup;
        }
        throw new AuthenticationError('You need to be logged in!');  
   } 
    
  },
};

module.exports = resolvers;
