
export const getChatRoomMessagesSortedByTime = /* GraphQL */ `
  query MessageByChatRoom(
    $chatRoomID: ID
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageByChatRoom(
      chatRoomID: $chatRoomID
      content: $content
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
//export const getChatRoomMessagesSortedByTime = /* GraphQL */ `
//  query MessagebyChatRoom(
//    $chatRoomID: ID
//    $createdAt: ModelStringKeyConditionInput
//    $sortDirection: ModelSortDirection
//    $filter: ModelChatMessageFilterInput
//    $limit: Int
//    $nextToken: String
//  ) {
//    messagebyChatRoom(
//      chatRoomID: $chatRoomID
//      createdAt: $createdAt
//      sortDirection: $sortDirection
//      filter: $filter
//      limit: $limit
//      nextToken: $nextToken
//    ) {
//      items {
//        id
//        userID
//        content
//        chatRoomID
//        createdAt
//        updatedAt
//      }
//    }
//  }
//`;

/*
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
    }
  }
`;
*/


export const getChatRoomMessages = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatMessages {
        items {
          id
          userID
          content
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const getChatRoomUsernamesAndAvatar = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatUsers {
        items {
          user {
            id
            firstName
            lastName
            avatarImage
          }
        }
      }
    }
  }
`;


export const getUserChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatUsers {
        items {
          chatRoom {
            id
            chatUsers {
              items {
                user {
                  id
                  firstName
                  lastName
                  avatarImage
                }
              }
            }
            chatMessages {
              items {
                content
                createdAt
              }
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;
export const getUserLeaseHistory = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      leaseTenantHistory {
        items {
          leaseTerm {
            id
             property {
                 address
             }
             termStartDate
             termEndDate
          }
        }
      }
      leaseLandlordHistory {
        items {
          leaseTerm {
            id
             property {
                 address
             }
             termStartDate
             termEndDate
          }
        }
      }
    }
  }
`;

export const getLeaseTermWithProperty = /* GraphQL */ `
  query GetLeaseTerm($id: ID!) {
    getLeaseTerm(id: $id) {
      id
      status
      property {
        id
        address
      }
      tenants {
        items {
          id
          leaseTermID
          userID
          user {
            firstName
            lastName
            avatarImage
          }
          status
        }
      }
      landlords {
        items {
          id
          leaseTermID
          userID
          user {
            firstName
            lastName
            avatarImage
          }
          status
        }
      }
      termStartDate
      termEndDate
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
    }
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
    }
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
    }
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
    }
  }
`;