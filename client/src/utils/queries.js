import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_CONTACTS = gql`
{
  contacts {
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
      groupId
      name
      description
    }
  }
}`;

export const QUERY_SINGLE_CONTACT = gql`
query getSingleContact($contactid: ID!) {
  contact(contactid: $contactid) {
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
}`;

export const QUERY_GROUPS = gql`
{
  groups {
    _id
    name
    description
  }
}`;

export const QUERY_SINGLE_GROUP = gql`
query getSingleGroup($groupid: ID!) {
  group(groupid: $groupid) {
    _id
    name
    description
  }
}`;

export const QUERY_ACTIVITIES = gql`
 {
  activities {
    _id
    type
    subject
    description
    activitydate
  }
}`;

export const QUERY_SINGLE_ACTIVITY = gql`
query getSingleActivity($activityid: ID!) {
  activity(activityid: $activityid) {
    _id
    type
    subject
    description
    activitydate
  }
}`;
