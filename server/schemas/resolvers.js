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
      // if (context.user) {
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
      // throw AuthenticationError; }
      ,    
    updatecontactGroup: async (parent, { newGroupInfo, contactId }, context) => {
        // if (context.user) {
          const updatedContact = await Contact.findByIdAndUpdate(
            { _id: contactId },
            { $push: { groupInfo: newGroupInfo }},
            { new: true }
          );
          return updatedContact;
        }
        // throw new AuthenticationError('You need to be logged in!');
      // }
      ,
      updatecontactActivity: async (parent, { newActivityInfo, contactId }, context) => {
        // if (context.user) {
          const updatedContact = await Contact.findByIdAndUpdate(
            { _id: contactId },
            { $push: { activityInfo: newActivityInfo }},
            { new: true }
          );
          return updatedContact;
        }
        // throw new AuthenticationError('You need to be logged in!');
    // }
    ,
    addActivity: async (parent, { newActivity }, context) => {
        // if (context.user) {
          const activity = await Activity.create({
            type: newActivity.type,
            subject: newActivity.subject,
            description: newActivity.description,
            activitydate: newActivity.activitydate
          }); 
        
  
          return activity;
        }
        //throw AuthenticationError; }
    ,  
    addGroup: async (parent, { newGroup }, context) => {
        // if (context.user) {
          const group = await Group.create({
            name: newGroup.name,
            description: newGroup.description
          });
            
          return group;
        }
        // throw AuthenticationError;
    // }
    ,  
    deleteContact: async (parent, { contactid }, context) => {
      // if (context.user) {
        const contact = await Contact.findOneAndDelete({
          _id: contactid
        });
        return contact;
      }
      // throw AuthenticationError;
    //}
    ,
    deleteActivity: async (parent, { activityid }, context) => {
        // if (context.user) {
          const activity = await Activity.findOneAndDelete({
            _id: activityid
          });
          return activity;
        }
        // throw AuthenticationError;
    // }
    ,
    deleteGroup: async (parent, { groupid }, context) => {
        // if (context.user) {
          const group = await Group.findOneAndDelete({
            _id: groupid
          });
          return group;
        }
        // throw AuthenticationError;
    // }
    ,
    
  },
};

module.exports = resolvers;
