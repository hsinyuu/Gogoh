import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
    getChatRoomMessagesSortedByTime,
    getUserChatRooms,
    getChatRoomMessages,
    getChatRoomUserAndTermInfo,
    listChatMessagesID
} from "../graphql/customQuries";
import {
    listChatMessages,
    listChatRooms,
    listChatUsers
} from "../graphql/queries";
import {
    deleteChatRoom,
    deleteChatUser,
    deleteChatMessage,
    createChatRoom,
    createChatMessage,
    createChatUser
} from "../graphql/mutations";
import {
    onCreateChatMessageByChatRoomID
} from "../graphql/subscriptions";

export const subscribeToChatRoom = (chatRoomID, callback) => {
    return API.graphql(
        graphqlOperation(onCreateChatMessageByChatRoomID, {
            chatRoomID
        })).subscribe({
        next: (data) => callback(data.value.data.onCreateChatMessageByChatRoomID)
    })
}

export const deleteChatMessageWithID = async (messageID) => {
    return await API.graphql(
            graphqlOperation(deleteChatMessage, {
                input: {
                    id: messageID
                }
            })
        )
        .catch(error => console.error(error));
}

export const createChatMessageInChatRoom = async (chatRoomID, userID, content) => {
    return await API.graphql(
        graphqlOperation(createChatMessage, {
            input: {
                chatRoomID,
                userID,
                content
            }
        })
    ).catch((error) => console.error(error))
}

export const getChatRoomUserAndTermInfoFromRoomID = async (chatRoomID) => {
    return await API.graphql(
        graphqlOperation(getChatRoomUserAndTermInfo, {
            id: chatRoomID
        })
    ).then((chatRoomData) => {
        const chatUsersData = chatRoomData.data.getChatRoom.chatUsers.items;
        let userInfo = []
        chatUsersData.forEach((data) => {
            userInfo = [...userInfo, {
                id: data.user.id,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                avatarImage: data.user.avatarImage
            }]
        })

        const leaseTermID = chatRoomData.data.getChatRoom.leaseTermID;
        return {
            userInfo,
            leaseTermID
        };
    }).catch(err => console.error(err))

}

export const getSortedChatRoomMessagesFromChatRoomID = async (chatRoomID) => {
    const chatRoomData = await API.graphql(
        graphqlOperation(getChatRoomMessagesSortedByTime, {
            chatRoomID,
            sortDirection: 'DESC',
        })
    ).catch((error) => console.error(error))
    return chatRoomData.data.messageByChatRoom.items;
}

export const getChatRoomMessagesFromChatRoomID = async (chatRoomID) => {
    const chatRoomData = await API.graphql(
        graphqlOperation(getChatRoomMessages, {
            id: chatRoomID
        })
    )
    return chatRoomData.data.getChatRoom.chatMessages;
}

export const getChatRoomsFromUserID = async (userID) => {
    const chatRoomsData = await API.graphql(
        graphqlOperation(getUserChatRooms, {
            id: userID
        })
    )
    return chatRoomsData.data.getUser;
}

export const createChatRoomWithUsers = async (userIDs) => {
    const chatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, {
            input: {}
        })).catch(
        (error) => {
            console.error(error);
            return;
        }
    )
    var chatUserDatas = [];
    for (var i = 0; i < userIDs.length; i++) {
        const userID = userIDs[i];
        const chatUserData = await API.graphql(
            graphqlOperation(createChatUser, {
                input: {
                    userID,
                    chatRoomID: chatRoomData.data.createChatRoom.id
                }
            })
        ).then((data) => {
            return data;
        })
        chatUserDatas = [...chatUserDatas, chatUserData.data.createChatUser];
    }
    return chatUserDatas;
}


export const deleteAllChatRoomAndChatUser = async () => {
    await API.graphql(
        graphqlOperation(listChatUsers, {})
    ).then(async (listChatUserData) => {
        for (var i = 0; i < listChatUserData.data.listChatUsers.items.length; i++) {
            await API.graphql(
                graphqlOperation(deleteChatUser, {
                    input: {
                        id: listChatUserData.data.listChatUsers.items[i].id
                    }
                })
            )
        }
    })

    await API.graphql(
        graphqlOperation(listChatRooms, {})
    ).then(async (listChatRoomData) => {
        for (var i = 0; i < listChatRoomData.data.listChatRooms.items.length; i++) {
            await API.graphql(
                graphqlOperation(deleteChatRoom, {
                    input: {
                        id: listChatRoomData.data.listChatRooms.items[i].id
                    }
                })
            )
        }
    })

    await API.graphql(
        graphqlOperation(listChatMessagesID, {})
    ).then(async (listChatMessagesData) => {
        for (var i = 0; i < listChatMessagesData.data.listChatMessages.items.length; i++) {
            await API.graphql(
                graphqlOperation(deleteChatMessage, {
                    input: {
                        id: listChatMessagesData.data.listChatMessages.items[i].id
                    }
                })
            )
        }
    })
}


/*
export const getChatRoomUserAndTermInfo =
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      leaseTermID
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
*/