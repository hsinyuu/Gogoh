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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
