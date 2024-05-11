import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(user) {
        return (
            <div>
                Hello {user.username}
            </div>
        )
    }
    else {
        return (
            <div>
                Please Login
            </div>
        )
    }
  
}

export default Profile