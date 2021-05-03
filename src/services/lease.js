import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
    getLeaseTermWithProperty,
    getUserLeaseHistory,
    deleteLeaseTerm,
    deleteLeaseTenant,
    deleteLeaseLandlord,
    listLeaseTerms,
    listLeaseTenants,
    listLeaseLandlords
} from "../graphql/customQuries";
import {
    getLeaseTerm,
    propertyByAddress,
} from "../graphql/queries";
import {
    updateLeaseTenant,
    updateLeaseLandlord,
    createProperty,
    createLeaseTerm,
    createLeaseTenant,
    createLeaseLandlord,
    updateLeaseTerm
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
    const LeaseTermStatus = {
        AMEND: "AMEND",
        STARTED: "STARTED",
        ENDED: "ENDED"
    }
    console.log(propertyID, termStartDate, termEndDate, LeaseTermStatus.AMEND);
    const newLeaseTermData = await API.graphql(
        graphqlOperation(createLeaseTerm, {
            input: {
                propertyID,
                termStartDate,
                termEndDate,
                status: "AMEND"
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
    const leaseTermData = await API.graphql(
        graphqlOperation(getLeaseTermWithProperty, {
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
                leaseEndDate,
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

export const changeLeaseUserStatus = async (leaseUser, userRole, newStatus) => {
    if (userRole == "Landlord") {
        return await API.graphql(
            graphqlOperation(updateLeaseLandlord, {
                input: {
                    id: leaseUser.id,
                    userID: leaseUser.userID,
                    leaseTermID: leaseUser.leaseTermID,
                    status: newStatus
                }
            })
        )
    }
    if (userRole == "Tenant") {
        console.log(leaseUser);
        console.log({
            id: leaseUser.id,
            userID: leaseUser.userID,
            leaseTermID: leaseUser.leaseTermID,
            status: newStatus

        })
        return await API.graphql(
            graphqlOperation(updateLeaseTenant, {
                input: {
                    id: leaseUser.id,
                    userID: leaseUser.userID,
                    leaseTermID: leaseUser.leaseTermID,
                    status: newStatus
                }
            })
        )
    }
    console.error("Unknown user role")
    return null;
}

export const changeLeaseTermStatus = async (leaseTermID, newStatus) => {
    await API.graphql(
        graphqlOperation(getLeaseTerm, {
            id: leaseTermID
        })
    ).then((leaseTermData) => {
        const leaseTerm = leaseTermData.data.getLeaseTerm;
        if (leaseTerm == null) {
            console.error("No lease term found with id: " + leaseTermID);
            return;
        }
        API.graphql(
            graphqlOperation(updateLeaseTerm, {
                input: {
                    id: leaseTerm.id,
                    propertyID: leaseTerm.propertyID,
                    termStartDate: leaseTerm.termStartDate,
                    termEndDate: leaseTerm.termEndDate,
                    status: newStatus
                }
            })
        )
    })
}