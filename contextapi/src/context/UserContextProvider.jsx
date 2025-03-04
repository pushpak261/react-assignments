
//This is a store and we access in App.js

import React, {useState} from 'react';
import UserContext from "./UserContext";

//receiving props
const UserContextProvider = ({children}) => {

    //variable banake state mai store krna hai

    const[user, setUser] = useState(null)

     return(
         <>
             <UserContext.Provider value={{user, setUser}}>
                 {children}
             </UserContext.Provider>

         </>
     )
}

export default UserContextProvider