/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatMessageByChatRoomID = /* GraphQL */ `
  subscription OnCreateChatMessageByChatRoomID($chatRoomID: ID!) {
    onCreateChatMessageByChatRoomID(chatRoomID: $chatRoomID) {
      id
      userID
      content
      chatRoomID
      createdAt
      type
      issueID
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      test
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      test
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      test
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
export const onCreateLeaseTenant = /* GraphQL */ `
  subscription OnCreateLeaseTenant {
    onCreateLeaseTenant {
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
        test
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
export const onUpdateLeaseTenant = /* GraphQL */ `
  subscription OnUpdateLeaseTenant {
    onUpdateLeaseTenant {
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
        test
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
export const onDeleteLeaseTenant = /* GraphQL */ `
  subscription OnDeleteLeaseTenant {
    onDeleteLeaseTenant {
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
        test
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
export const onCreateLeaseLandlord = /* GraphQL */ `
  subscription OnCreateLeaseLandlord {
    onCreateLeaseLandlord {
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
        test
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
export const onUpdateLeaseLandlord = /* GraphQL */ `
  subscription OnUpdateLeaseLandlord {
    onUpdateLeaseLandlord {
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
        test
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
export const onDeleteLeaseLandlord = /* GraphQL */ `
  subscription OnDeleteLeaseLandlord {
    onDeleteLeaseLandlord {
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
        test
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
export const onCreateLeaseTerm = /* GraphQL */ `
  subscription OnCreateLeaseTerm {
    onCreateLeaseTerm {
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
      issues {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLeaseTerm = /* GraphQL */ `
  subscription OnUpdateLeaseTerm {
    onUpdateLeaseTerm {
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
      issues {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLeaseTerm = /* GraphQL */ `
  subscription OnDeleteLeaseTerm {
    onDeleteLeaseTerm {
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
      issues {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIssue = /* GraphQL */ `
  subscription OnCreateIssue {
    onCreateIssue {
      id
      leaseTermID
      leaseTerm {
        id
        propertyID
        termStartDate
        termEndDate
        status
        createdAt
        updatedAt
      }
      reporterUserID
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIssue = /* GraphQL */ `
  subscription OnUpdateIssue {
    onUpdateIssue {
      id
      leaseTermID
      leaseTerm {
        id
        propertyID
        termStartDate
        termEndDate
        status
        createdAt
        updatedAt
      }
      reporterUserID
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIssue = /* GraphQL */ `
  subscription OnDeleteIssue {
    onDeleteIssue {
      id
      leaseTermID
      leaseTerm {
        id
        propertyID
        termStartDate
        termEndDate
        status
        createdAt
        updatedAt
      }
      reporterUserID
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
export const onCreateChatUser = /* GraphQL */ `
  subscription OnCreateChatUser {
    onCreateChatUser {
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
        test
        createdAt
        updatedAt
      }
      chatRoomID
      chatRoom {
        id
        leaseTermID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatUser = /* GraphQL */ `
  subscription OnUpdateChatUser {
    onUpdateChatUser {
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
        test
        createdAt
        updatedAt
      }
      chatRoomID
      chatRoom {
        id
        leaseTermID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatUser = /* GraphQL */ `
  subscription OnDeleteChatUser {
    onDeleteChatUser {
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
        test
        createdAt
        updatedAt
      }
      chatRoomID
      chatRoom {
        id
        leaseTermID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      leaseTermID
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      leaseTermID
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      leaseTermID
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
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage {
    onCreateChatMessage {
      id
      userID
      content
      chatRoomID
      createdAt
      type
      issueID
      updatedAt
    }
  }
`;
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage {
    onUpdateChatMessage {
      id
      userID
      content
      chatRoomID
      createdAt
      type
      issueID
      updatedAt
    }
  }
`;
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage {
    onDeleteChatMessage {
      id
      userID
      content
      chatRoomID
      createdAt
      type
      issueID
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
