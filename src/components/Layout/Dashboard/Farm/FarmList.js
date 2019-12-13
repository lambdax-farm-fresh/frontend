import React, { useContext, useState } from 'react'
import FarmContext from '../../../../context/farm/FarmContext'

export default function FarmList() {
    const Farms = useContext(FarmContext);

    const [ ownedFarms, setOwnedFarms ] = useState([])

    const pullFarms = () => {
        Farms.getOwnedFarms(1)
        console.log("ok")
    }

    return (
        <div>
            <button onClick={pullFarms}>Nice</button>
        </div>
    )
}
