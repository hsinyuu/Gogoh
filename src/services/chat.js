import {
    API,
    graphqlOperation
} from "aws-amplify";
import {
   getUserChatRooms 
} from "../graphql/customQuries";
import {
    createChatRoom,
    createChatMessage,
    createChatUser
} from "../graphql/mutations";

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