/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLeaseTenant = /* GraphQL */ `
  mutation CreateLeaseTenant(
    $input: CreateLeaseTenantInput!
    $condition: ModelLeaseTenantConditionInput
  ) {
    createLeaseTenant(input: $input, condition: $condition) {
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
export const updateLeaseTenant = /* GraphQL */ `
  mutation UpdateLeaseTenant(
    $input: UpdateLeaseTenantInput!
    $condition: ModelLeaseTenantConditionInput
  ) {
    updateLeaseTenant(input: $input, condition: $condition) {
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
export const deleteLeaseTenant = /* GraphQL */ `
  mutation DeleteLeaseTenant(
    $input: DeleteLeaseTenantInput!
    $condition: ModelLeaseTenantConditionInput
  ) {
    deleteLeaseTenant(input: $input, condition: $condition) {
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
export const createLeaseLandlord = /* GraphQL */ `
  mutation CreateLeaseLandlord(
    $input: CreateLeaseLandlordInput!
    $condition: ModelLeaseLandlordConditionInput
  ) {
    createLeaseLandlord(input: $input, condition: $condition) {
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
export const updateLeaseLandlord = /* GraphQL */ `
  mutation UpdateLeaseLandlord(
    $input: UpdateLeaseLandlordInput!
    $condition: ModelLeaseLandlordConditionInput
  ) {
    updateLeaseLandlord(input: $input, condition: $condition) {
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
export const deleteLeaseLandlord = /* GraphQL */ `
  mutation DeleteLeaseLandlord(
    $input: DeleteLeaseLandlordInput!
    $condition: ModelLeaseLandlordConditionInput
  ) {
    deleteLeaseLandlord(input: $input, condition: $condition) {
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
export const createLeaseTerm = /* GraphQL */ `
  mutation CreateLeaseTerm(
    $input: CreateLeaseTermInput!
    $condition: ModelLeaseTermConditionInput
  ) {
    createLeaseTerm(input: $input, condition: $condition) {
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
export const updateLeaseTerm = /* GraphQL */ `
  mutation UpdateLeaseTerm(
    $input: UpdateLeaseTermInput!
    $condition: ModelLeaseTermConditionInput
  ) {
    updateLeaseTerm(input: $input, condition: $condition) {
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
export const deleteLeaseTerm = /* GraphQL */ `
  mutation DeleteLeaseTerm(
    $input: DeleteLeaseTermInput!
    $condition: ModelLeaseTermConditionInput
  ) {
    deleteLeaseTerm(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createChatUser = /* GraphQL */ `
  mutation CreateChatUser(
    $input: CreateChatUserInput!
    $condition: ModelChatUserConditionInput
  ) {
    createChatUser(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatUser = /* GraphQL */ `
  mutation UpdateChatUser(
    $input: UpdateChatUserInput!
    $condition: ModelChatUserConditionInput
  ) {
    updateChatUser(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatUser = /* GraphQL */ `
  mutation DeleteChatUser(
    $input: DeleteChatUserInput!
    $condition: ModelChatUserConditionInput
  ) {
    deleteChatUser(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
      id
      userID
      content
      chatRoomID
      createdAt
      updatedAt
    }
  }
`;
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
      id
      userID
      content
      chatRoomID
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
      id
      userID
      content
      chatRoomID
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
