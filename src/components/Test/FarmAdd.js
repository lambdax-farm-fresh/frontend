import React, { useContext, useState, useEffect } from 'react';

import FarmContext from '../../context/farm/FarmContext';

export default function FarmAdd(props) {

    const farmContext = useContext(FarmContext);

    useEffect(() => {
        console.log("attempting to pull farms")
        farmContext.getFarms();
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
