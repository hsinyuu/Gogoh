import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
    getLeaseTerm,
    getUserLeaseHistory,
    deleteLeaseTerm,
    deleteLeaseTenant,
    deleteLeaseLandlord,
    listLeaseTerms,
    listLeaseTenants,
    listLeaseLandlords
} from "../graphql/customQuries";
import {
    propertyByAddress,
} from "../graphql/queries";
import {
    createProperty,
    createLeaseTerm,
    createLeaseTenant,
    createLeaseLandlord,
} from "../graphql/mutations";

export const fetchOrCreateProperty = async (propertyAddress) => {
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

export const createNewLeaseTerm = async (propertyID, termStartDate, termEndDate) => {
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

export const createLeaseTenantForLeaseTerm = async (userID, leaseTermID, initialStatus) => {
    console.log(userID, leaseTermID);
    const newLeaseTenantData = await API.graphql(
        graphqlOperation(createLeaseTenant, {
            input: {
                userID: userID,
                leaseTermID: leaseTermID,
                status: initialStatus
            },
        })
    );
    return newLeaseTenantData.data.createLeaseTenant;
}

export const createLeaseLandlordForLeaseTerm = async (userID, leaseTermID, initialStatus) => {
    const newLeaseTenantData = await API.graphql(
        graphqlOperation(createLeaseLandlord, {
            input: {
                userID: userID,
                leaseTermID: leaseTermID,
                status: initialStatus
            },
        })
    );
    return newLeaseTenantData.data.createLeaseLandlord;
}

export const getLeaseTermFromLeaseTermID = async (leaseTermID) => {
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

export const getLeaseTermHistoryFromUserID = async (userID) => {
    const leaseTermData = await API.graphql(
        graphqlOperation(getUserLeaseHistory, {
            id: userID
        })
    );
    return leaseTermData.data.getUser;
}

export const listAllLeaseLandlords = async () => {
    const data = await API.graphql(
        graphqlOperation(listLeaseLandlords)
    )
    return data.data.listLeaseLandlords
}

export const deleteLeaseLandlordFromID = async (leaseLandlordID) => {
    const data = await API.graphql(
        graphqlOperation(deleteLeaseLandlord, {
            input: {
                id: leaseLandlordID
            }
        })
    )
    return data.data.deleteLeaseLandlord
}

export const listAllLeaseTenants = async () => {
    const data = await API.graphql(
        graphqlOperation(listLeaseTenants)
    )
    return data.data.listLeaseTenants
}

export const deleteLeaseTenantFromID = async (leaseTenantID) => {
    const data = await API.graphql(
        graphqlOperation(deleteLeaseTenant, {
            input: {
                id: leaseTenantID
            }
        })
    )
    return data.data.deleteLeaseTenant
}

export const listAllLeaseTerms = async () => {
    const data = await API.graphql(
        graphqlOperation(listLeaseTerms)
    )
    return data.data.listLeaseTerms
}

export const deleteLeaseTermFromID = async (leaseTermID) => {
    console.log('delete ', leaseTermID)
    const data = await API.graphql(
        graphqlOperation(deleteLeaseTerm, {
            input: {
                id: leaseTermID
            }
        })
    )
    return data.data.deleteLeaseTerm
}

export const createLeaseTermForPropertyAddress = async (address, leaseStartDate, leaseEndDate) => {
    console.log(address, leaseStartDate, leaseEndDate)
    let leaseTermData = await fetchOrCreateProperty(address)
        .then((propertyData) => propertyData.id)
        .then((propertyID) =>
            createNewLeaseTerm(
                propertyID,
                leaseStartDate,
                leaseEndDate
            )
        )
    return leaseTermData
}

export const addLeaseTermToUser = async (leaseTermID, userID, userRole, status) => {
    if (userRole == "Landlord") {
        let leaseLandlordData = await createLeaseLandlordForLeaseTerm(
            userID,
            leaseTermID,
            status)
        return leaseLandlordData;
    }
    if (userRole == "Tenant") {
        let leaseTenantData = await createLeaseTenantForLeaseTerm(
            userID,
            leaseTermID,
            status)
        return leaseTenantData;
    }
    console.error("Unexpected user role : " + userRole)
}