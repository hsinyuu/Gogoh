/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userRole
      firstName
      lastName
      avatarImage
      phoneNumber
      email
      chatUsers {
        nextToken
      }
      leaseTenantHistory {
        nextToken
      }
      leaseLandlordHistory {
        nextToken
      }
      events {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userRole
        firstName
        lastName
        avatarImage
        phoneNumber
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeaseTenant = /* GraphQL */ `
  query GetLeaseTenant($id: ID!) {
    getLeaseTenant(id: $id) {
      id
      userID
      leaseTermID
      user {
        id
        userRole
        firstName
        lastName
        avatarImage
        phoneNumber
        email
        createdAt
        updatedAt
      }
      leaseTerm {
        id
        propertyID
        termStartDate
        termEndDate
        status
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listLeaseTenants = /* GraphQL */ `
  query ListLeaseTenants(
    $filter: ModelLeaseTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaseTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        leaseTermID
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeaseLandlord = /* GraphQL */ `
  query GetLeaseLandlord($id: ID!) {
    getLeaseLandlord(id: $id) {
      id
      userID
      leaseTermID
      user {
        id
        userRole
        firstName
        lastName
        avatarImage
        phoneNumber
        email
        createdAt
        updatedAt
      }
      leaseTerm {
        id
        propertyID
        termStartDate
        termEndDate
        status
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listLeaseLandlords = /* GraphQL */ `
  query ListLeaseLandlords(
    $filter: ModelLeaseLandlordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaseLandlords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        leaseTermID
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLeaseTerm = /* GraphQL */ `
  query GetLeaseTerm($id: ID!) {
    getLeaseTerm(id: $id) {
      id
      property {
        id
        address
        createdAt
        updatedAt
      }
      propertyID
      tenants {
        nextToken
      }
      landlords {
        nextToken
      }
      termStartDate
      termEndDate
      status
      createdAt
      updatedAt
    }
  }
`;
export const listLeaseTerms = /* GraphQL */ `
  query ListLeaseTerms(
    $filter: ModelLeaseTermFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaseTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        propertyID
        termStartDate
        termEndDate
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      address
      leaseHistory {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropertys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatUser = /* GraphQL */ `
  query GetChatUser($id: ID!) {
    getChatUser(id: $id) {
      id
      userID
      user {
        id
        userRole
        firstName
        lastName
        avatarImage
        phoneNumber
        email
        createdAt
        updatedAt
      }
      chatRoomID
      chatRoom {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatUsers = /* GraphQL */ `
  query ListChatUsers(
    $filter: ModelChatUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatUsers {
        nextToken
      }
      chatMessages {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
      id
      userID
      content
      chatRoomID
      createdAt
      updatedAt
    }
  }
`;
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        content
        chatRoomID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      userID
      title
      action
      startTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        title
        action
        startTime
        endTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userRole
        firstName
        lastName
        avatarImage
        phoneNumber
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const propertyByAddress = /* GraphQL */ `
  query PropertyByAddress(
    $address: String
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertyByAddress(
      address: $address
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messageByTime = /* GraphQL */ `
  query MessageByTime(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageByTime(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        content
        chatRoomID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
