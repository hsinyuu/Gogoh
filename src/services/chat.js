import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
    getChatRoomMessagesSortedByTime,
    getUserChatRooms,
    getChatRoomMessages,
    getChatRoomUsernamesAndAvatar
} from "../graphql/customQuries";
import {
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
    console.log(chatRoomID, userID, content)
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

export const getChatRoomUsernamesAndAvatarFromChatRoomID = async (chatRoomID) => {
    return await API.graphql(
        graphqlOperation(getChatRoomUsernamesAndAvatar, {
            id: chatRoomID
        })
    ).then((chatRoomData) => {
        const chatUsersData = chatRoomData.data.getChatRoom.chatUsers.items;
        let ret = []
        chatUsersData.forEach((data) => {
            ret = [...ret, {
                id: data.user.id,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                avatarImage: data.user.avatarImage
            }]
        })
        return ret;
    })
}

export const getSortedChatRoomMessagesFromChatRoomID = async (chatRoomID) => {
    const chatRoomData = await API.graphql(
        graphqlOperation(getChatRoomMessagesSortedByTime, {
            chatRoomID,
            sortDirection: 'DESC',
        })
    ).catch((error) => console.error(error))
    console.log('get', chatRoomData)
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
        }).catch(
            (error) => {
                console.error(error);
                return;
            }
        )
    )
    chatUserDatas = []
    userIDs.foreach((userID) =>
        API.graphql(createChatUser, {
            userID,
            chatRoomID: chatRoomData.id
        }).then((data) => {
            chatUserDatas = [...chatUserDatas, data]
        })
    )
    return chatUserDatas;
}