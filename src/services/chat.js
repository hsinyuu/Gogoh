import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
    getUserChatRooms,
    getChatRoomMessages,
    getChatRoomUsernamesAndAvatar
} from "../graphql/customQuries";
import {
    createChatRoom,
    createChatMessage,
    createChatUser
} from "../graphql/mutations";

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