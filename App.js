import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import CreateUser from "screens/CreateUser";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from "navigations/MainBottomTabs";
import { Amplify } from "aws-amplify";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import awsconfig from "./aws-exports";
import { UserContext } from "./src/context/UserContext";
import { fetchUser, createNewUser } from "services/user";
import { SafeAreaView } from "react-native-safe-area-context";

Amplify.configure(awsconfig);

const useUser = () => {
  const [user, setUser] = useState(null);
  const [createUser, setCreateUser] = useState(false);

  useEffect(() => {
    fetchUser().then((user) => {
      if (user) {
        setUser(user);
      } else {
        setCreateUser(true);
      }
    });
  }, [createUser]);

  return [user, createUser, setCreateUser];
};

function App() {
  const [user, createUser, setCreateUser] = useUser();
  useEffect(() => {
    console.log('loading app', user);
  }, [user, createUser]);

  if (createUser) {
    return <CreateUser setCreateUser={setCreateUser}/>
  } else if (user == null) {
    return (
      <SafeAreaView>
        <Text> Loading </Text>
      </SafeAreaView>
    );
  } else {
    return (
      <UserContext.Provider value={user}>
        <NavigationContainer>
          <MainBottomTabs />
        </NavigationContainer>
      </UserContext.Provider>
    );
  }
}

const MyInput = Object.assign({}, AmplifyTheme.Input, {
  borderColor: "grey",
  padding: 16,
  borderWidth: 1,
  borderRadius: 10,
  height: 50,
});
const MyTheme = Object.assign({}, AmplifyTheme, {
  input: MyInput,
});

//export default withAuthenticator(App, { includeGreetings: false });
export default withAuthenticator(App, false, [], null, MyTheme);
