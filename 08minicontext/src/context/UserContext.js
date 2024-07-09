import React from "react";

// react has by default Create context
//  IT IS LIKE A GLOBAL VARIABLE

// CONTEXT GIVE PROVIDER -> when we wrap then in <userContext> 
// then all the inside of <UserContext.provider> can access to ALL STATES

const UserContext = React.createContext()

export default UserContext;