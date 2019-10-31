import React, { useContext, useState } from 'react';

import FarmContext from '../../context/farm/FarmContext';
import UserContext from '../../context/user/UserContext';

export default function AddFarm(props) {

    const Farms = useContext(FarmContext);
    const Users = useContext(UserContext);

    const [farmName, setFarmName] = useState("");
    const [updfarmName, setupdFarmName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const farmObj = {
            userId: Users.state.user.id,
            farmName: farmName
        }

        try {
            Farms.addFarm(farmObj);
            Farms.getFarms()
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmitUpdate = e => {
        e.preventDefault();

        const farmObj = {
            id: 1,
            userId: Users.state.user.id,
            farmName: updfarmName
        }

        try {
            Farms.updateFarm(farmObj);
            Farms.getFarms()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Farm Name</label>
                <input type="text" value={farmName} name="farmName" onChange={e => setFarmName(e.target.value)} />
                <button>Submit</button>
            </form>
            <form onSubmit={handleSubmitUpdate}>
                <label>Updated Farm Name (Farm ID 1)</label>
                <input type="text" value={updfarmName} name="farmName" onChange={e => setupdFarmName(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}