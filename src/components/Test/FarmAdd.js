import React, { useContext, useState, useEffect } from 'react';

import FarmContext from '../../context/farm/FarmContext';
import UserContext from '../../context/user/UserContext';

export default function FarmAdd(props) {

    const farmContext = useContext(FarmContext);
    const userContext = useContext(UserContext);

    useEffect(() => {
        console.log("attempting to pull farms")
        farmContext.getFarms();
        userContext.getUser("106788472579328039195");
    }, [])

    return (
        <div>
            {farmContext.state.farms ? farmContext.state.farms.map(farm => (
                <div key={Date.now() + Math.random()*325}>
                    {farm.farmName}
                </div>
            )) : "No Farms"}
        </div>
    )
}
