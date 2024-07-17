import React from "react";
import UserContext from "./UserContext";

// jo v prop aa rhe hai as it is use kar lo ->  CHILDREN IS GENERIC NAME 
// JO V AA RHA HAI AAGE PASS KAR DO
const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null)

        return (
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider