import React, { useEffect, useState } from "react";
import { Text } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MainBottomTabs from "navigations/MainBottomTabs";
import { Amplify } from "aws-amplify";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import awsconfig from "./aws-exports";
import { UserContext } from "./src/context/UserContext";
import { fetchUser } from "services/user";

Amplify.configure(awsconfig);

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, []);

  return user;
};

function App() {
  const user = useUser();
  useEffect(() => {
    console.log(user);
  }, [user]);

  if (user == null) {
    return <Text>Loading</Text>;
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
const MyTheme = Object.assign({}, AmplifyTheme, { input: MyInput });

//export default withAuthenticator(App, { includeGreetings: false });
export default withAuthenticator(App, false, [], null, MyTheme);
