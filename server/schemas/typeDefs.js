const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    contact: [Contact]
  }

  type Contact {
    _id: ID
    name: String!
    nickname: String
    email: String!
    company: String
    title: String
    department: String
    businessphone: String
    mobilephone: String
    address1: String
    address2: String
    city: String
    state: String
    country: String
    zip: String
    website: String
    groupInfo: [Group]
    activityInfo: [Activity]
  }

  type Group {
    _id: ID
    name: String!
    description: String
  }

  type Activity {
    _id: ID
    type: String!
    subject: String
    description: String
    activitydate: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input inputcontactInfo {
    name: String!
    nickname: String
    email: String!
    company: String
    title: String
    department: String
    businessphone: String
    mobilephone: String
    address1: String
    address2: String
    city: String
    state: String
    country: String
    zip: String
    website: String
  }

  input inputgroupInfo {
    name: String!
    description: String
  }
  input inputactivityInfo {
    type: String!
    subject: String
    description: String
    activitydate: String
  }


  type Query {
    users: [User]
    user(username: String!): User
    contacts: [Contact]
    contact(contactid: ID!): Contact
    group: [Group]
    activity: [Activity]    
    

  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addContact( newContact: inputcontactInfo ): Contact
    addActivity( newActivity: inputactivityInfo): Activity
    addGroup( newGroup: inputgroupInfo ): Group
    updatecontactGroup( newGroupInfo: inputgroupInfo, contactId: ID!): Contact
    updatecontactActivity( newActivityInfo: inputactivityInfo, contactId: ID!): Contact
    deleteContact(contactid: ID!): Contact 
    deleteActivity(activityid: ID!): Activity
    deleteGroup(groupid: ID!): Group
  }
`;

module.exports = typeDefs;
