import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addContact($newContact: inputcontactInfo!) {
    addContact(newContact: $newContact) {
      _id
      name
      nickname
      email
      company
      title
      department
      businessphone
      mobilephone
      address1
      address2
      city
      state
      country
      zip
      website
    }
  }
`;

export const ADD_GROUP = gql`
  mutation addGroup($newGroup: inputgroupInfo!) {
    addGroup(newGroup: $newGroup) {
      _id
      name
      description
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity($newActivity: inputactivityInfo!) {
    addActivity(newActivity: $newActivity) {
      _id
      type
      subject
      description
      activitydate
    }
  }
`;

export const UPDATE_CONTACT_GROUP = gql`
  mutation updatecontactGroup($newGroupInfo: inputgroupInfo!, $contactId: ID!) {
    updatecontactGroup(newGroupInfo: $newGroupInfo, contactId: $contactId) {
      _id
      name
      nickname
      email
      company
      title
      department
      businessphone
      mobilephone
      address1
      address2
      city
      state
      country
      zip
      website
      groupInfo {
        _id
        name
        description
      }
    }
  }
`;

export const UPDATE_CONTACT_ACTIVITY = gql`
  mutation updatecontactActivity($newActivityInfo: inputactivityInfo!, $contactId: ID!) {
    updatecontactActivity(newActivityInfo: $newActivityInfo, contactId: $contactId) {
      _id
      name
      nickname
      email
      company
      title
      department
      businessphone
      mobilephone
      address1
      address2
      city
      state
      country
      zip
      website
      activityInfo {
        _id
        type
        subject
        description
        activitydate
      }
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation deleteContact($contactId: ID!) {
    deleteContact(contactId: $contactId) {
      _id
      name
      nickname
      email
      company
      title
      department
      businessphone
      mobilephone
      address1
      address2
      city
      state
      country
      zip
      website
    }
  }
`;

export const DELETE_GROUP = gql`
  mutation deleteGroup($groupId: ID!) {
    deleteGroup(groupId: $groupId) {
      _id
      name
      description
    }
  }
`;

export const DELETE_ACTIVITY = gql`
  mutation deleteActivity($activityId: ID!) {
    deleteActivity(activityId: $activityId) {
      _id
      type
      subject
      description
      activitydate
    }
  }
`;