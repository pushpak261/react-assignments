

//Accessing data

import React, {useContext} from 'react'
import UserContext from "../context/UserContext";

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return  <div> please login </div>

    //If false than it returns this
    return <div>Welcome {user.username}</div>




}

export default Profile