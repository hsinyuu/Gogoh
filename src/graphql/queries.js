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
      leaseTenantHistory {
        items {
          id
          userID
          leaseTermID
          createdAt
          updatedAt
        }
        nextToken
      }
      leaseLandlordHistory {
        items {
          id
          userID
          leaseTermID
          createdAt
          updatedAt
        }
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
        leaseTenantHistory {
          nextToken
        }
        leaseLandlordHistory {
          nextToken
        }
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
        leaseTenantHistory {
          nextToken
        }
        leaseLandlordHistory {
          nextToken
        }
        createdAt
        updatedAt
      }
      leaseTerm {
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
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
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
        leaseTenantHistory {
          nextToken
        }
        leaseLandlordHistory {
          nextToken
        }
        createdAt
        updatedAt
      }
      leaseTerm {
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
        createdAt
        updatedAt
      }
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
          createdAt
          updatedAt
        }
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
        leaseHistory {
          nextToken
        }
        createdAt
        updatedAt
      }
      propertyID
      tenants {
        items {
          id
          userID
          leaseTermID
          createdAt
          updatedAt
        }
        nextToken
      }
      landlords {
        items {
          id
          userID
          leaseTermID
          createdAt
          updatedAt
        }
        nextToken
      }
      termStartDate
      termEndDate
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
        items {
          id
          propertyID
          termStartDate
          termEndDate
          createdAt
          updatedAt
        }
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
        leaseHistory {
          nextToken
        }
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
        leaseHistory {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
