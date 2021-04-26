import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
    getLeaseTerm,
    getUserLeaseHistory 
} from "../graphql/customQuries";
import {
    propertyByAddress
} from "../graphql/queries";
import {
    createProperty,
    createLeaseTerm,
    createLeaseTenant,
    createLeaseLandlord,
} from "../graphql/mutations";

const fetchOrCreateProperty = async (propertyAddress) => {
    const existingPropertyWithSameAddress = await API.graphql(
        graphqlOperation(propertyByAddress, {
            address: propertyAddress,
        })
    );
    if (existingPropertyWithSameAddress.data.propertyByAddress.items.length) {
        console.log("new property");
        console.log(
            existingPropertyWithSameAddress.data.propertyByAddress.items
        );
        console.log("Property exists");
        return existingPropertyWithSameAddress.data.propertyByAddress.items[0];
    } else {
        const newPropertyData = await API.graphql(
            graphqlOperation(createProperty, {
                input: {
                    address: propertyAddress,
                },
            })
        );
        return newPropertyData.data.createProperty;
    }
}

const createNewLeaseTerm = async (propertyID, termStartDate, termEndDate) => {
    console.log(propertyID, termStartDate, termEndDate);
    const newLeaseTermData = await API.graphql(
        graphqlOperation(createLeaseTerm, {
            input: {
                propertyID,
                termStartDate,
                termEndDate,
            },
        })
    );
    return newLeaseTermData.data.createLeaseTerm;
}

const createLeaseTenantForLeaseTerm = async (userID, leaseTermID) => {
    console.log(userID, leaseTermID);
    const newLeaseTenantData = await API.graphql(
        graphqlOperation(createLeaseTenant, {
            input: {
                userID: userID,
                leaseTermID: leaseTermID
            },
        })
    );
    return newLeaseTenantData.data.createLeaseTenant;
}

const createLeaseLandlordForLeaseTerm = async (userID, leaseTermID) => {
    console.log(userID, leaseTermID);
    const newLeaseTenantData = await API.graphql(
        graphqlOperation(createLeaseLandlord, {
            input: {
                userID: userID,
                leaseTermID: leaseTermID
            },
        })
    );
    return newLeaseTenantData.data.createLeaseLandlord;
}

const getLeaseTermFromLeaseTermID = async (leaseTermID) => {
    if (leaseTermID == null) {
        error.log('Bad value for leaseTermID')
    }
    console.log(leaseTermID);
    const leaseTermData = await API.graphql(
        graphqlOperation(getLeaseTerm, {
            id: leaseTermID
        })
    );
    return leaseTermData.data.getLeaseTerm;
}

const getLeaseTermHistoryFromUserID = async (userID) => {
    const leaseTermData = await API.graphql(
        graphqlOperation(getUserLeaseHistory, {
            id: userID 
        })
    );
    return leaseTermData.data.getUser;
}

export {
    getLeaseTermHistoryFromUserID,
    getLeaseTermFromLeaseTermID,
    fetchOrCreateProperty,
    createNewLeaseTerm,
    createLeaseTenantForLeaseTerm,
    createLeaseLandlordForLeaseTerm
}