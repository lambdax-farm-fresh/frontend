import React, { useContext, useEffect } from 'react';

import FarmContext from '../../context/farm/FarmContext';
import AddFarm from './AddFarm';

export default function FarmList(props) {

    const farmContext = useContext(FarmContext);

    useEffect(() => {
        console.log("attempting to pull farms")
        farmContext.getFarms();
    }, [])

    return (
        <div>
            <AddFarm />
            {farmContext.state.farms ? farmContext.state.farms.map(farm => (
                <div key={Date.now() + Math.random()*325}>
                    {farm.farmName}
                </div>
            )) : "No Farms"}
        </div>
    )
}
