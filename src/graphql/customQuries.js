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
        }
      }
      landlords {
        items {
          user {
            firstName
            lastName
            avatarImage
          }
        }
      }
      termStartDate
      termEndDate
    }
  }
`;