import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { createUser } from "../graphql/mutations";

const fetchUser = async () => {
  const userInfo = await Auth.currentAuthenticatedUser({
    params: { bypassCache: true },
  });
  if (userInfo) {
    const userData = await API.graphql(
      graphqlOperation(getUser, { id: userInfo.attributes.sub })
    );
    if (userData.data.getUser) {
      console.log("User already registered");
      console.log('user: ', userData.data.getUser)
      return userData.data.getUser
    }
    const newUser = {
      id: userInfo.attributes.sub,
      userRole: "Tenant",
      firstName: "Chuck",
      lastName: "Norris",
      avatarImage:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2488&q=80",
      phoneNumber: userInfo.attributes.phone_number,
      email: userInfo.attributes.email,
      registerDate: new Date().toISOString(),
    };
    await API.graphql(
      graphqlOperation(createUser, {
        input: newUser,
      })
    );
    return newUser;
  }
  console.log('fetch')
};

export {
  fetchUser
}