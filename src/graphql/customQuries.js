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

export const getLeaseTerm = /* GraphQL */ `
  query GetLeaseTerm($id: ID!) {
    getLeaseTerm(id: $id) {
      id
      property {
        id
        address
      }
      tenants {
        items {
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