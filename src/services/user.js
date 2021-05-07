import {
  API,
  Auth,
  graphqlOperation
} from "aws-amplify";
import {
  getUser,
  userByEmail
} from "../graphql/queries";
import {
  createUser
} from "../graphql/mutations";

export const fetchUser = async () => {
  const userInfo = await Auth.currentAuthenticatedUser({
    params: {
      bypassCache: true
    },
  }).catch(err => console.error(err));
  if (userInfo == null) console.error("User not logged in");
  
  const userData = await API.graphql(
    graphqlOperation(getUser, {
      id: userInfo.attributes.sub
    })
  ).catch(err => console.error(err));

  if (userData.data.getUser) {
    console.log("User already registered");
    console.log('Fetch User: ', userData.data.getUser)
    return userData.data.getUser
  }
  return null
};

export const createNewUser = async (firstName, lastName, userRole) => {
  console.log('createNewUser');
  const userInfo = await Auth.currentAuthenticatedUser({
    params: {
      bypassCache: true
    },
  });
  if (userInfo == null) {
    console.error("User not logged in");
  }

  const newUser = {
    id: userInfo.attributes.sub,
    userRole,
    firstName,
    lastName,
    avatarImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2488&q=80",
    phoneNumber: userInfo.attributes.phone_number,
    email: userInfo.attributes.email,
    //registerDate: new Date().toISOString(),
  };
  await API.graphql(
    graphqlOperation(createUser, {
      input: newUser,
    })
  );
  return newUser;
}

export const getUserByEmail = async (email) => {
  const userData = await API.graphql(graphqlOperation(userByEmail, {
    email
  }))
  return userData.data.userByEmail;
}