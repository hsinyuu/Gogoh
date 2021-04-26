/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateLeaseTerm = /* GraphQL */ `
  subscription OnCreateLeaseTerm {
    onCreateLeaseTerm {
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
export const onUpdateLeaseTerm = /* GraphQL */ `
  subscription OnUpdateLeaseTerm {
    onUpdateLeaseTerm {
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
export const onDeleteLeaseTerm = /* GraphQL */ `
  subscription OnDeleteLeaseTerm {
    onDeleteLeaseTerm {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty {
    onCreateProperty {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty {
    onUpdateProperty {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty {
    onDeleteProperty {
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
