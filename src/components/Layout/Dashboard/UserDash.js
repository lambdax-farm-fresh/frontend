import React, { useContext } from 'react'

import UserContext from '../../context/user/UserContext'

export default function UserDash() {
    const Users = useContext(UserContext)

    return (
        <>
            {Users.state.user !== null ? 
                (
                    <div>
                        User Dashboard Here
                    </div>
                ) :
                (
                    <div>
                        No user
                    </div>
                )}
        </>
    )
}
