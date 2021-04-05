import { useState, useEffect } from "react";
import React from "react";
import { Auth } from "aws-amplify";
import { Text, SafeAreaView } from "react-native";

const Home = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    Auth.currentUserInfo().then((userInfo) => {
      const { attributes = {} } = userInfo;
      setEmail(attributes.email)
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>{email}</Text>
    </SafeAreaView>
  );
};

export default Home;