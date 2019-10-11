import React, { useContext, useState, useEffect } from 'react';

import FarmContext from '../../context/farm/FarmContext';

export default function FarmAdd(props) {

    const farmContext = useContext(FarmContext);

    return (
        <div>
            {farmContext.state ? <div> Context Connected. </div> : <div> Context Not Working </div>}
        </div>
    )
}
