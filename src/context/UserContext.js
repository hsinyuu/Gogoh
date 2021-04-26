import React from 'react';
const UserContext = React.createContext({user: {firstName:'', lastName:'', avatarImage:''}});
export { UserContext };