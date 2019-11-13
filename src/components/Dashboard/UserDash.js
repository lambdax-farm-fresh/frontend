import React, { useContext } from 'react'

import AddFarm from '../Test/AddFarm';
import UserContext from '../../context/user/UserContext'

export default function UserDash() {
    const Users = useContext(UserContext)

    return (
        <>
            {Users.state.user !== null ? 
                (
                    <div>
                        User Dashboard Here
                        <AddFarm />
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
