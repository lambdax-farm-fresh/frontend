import React, { useContext, useState } from 'react';
import FarmContext from '../../../../context/farm/FarmContext';
import UserContext from '../../../../context/user/UserContext';

import styled from 'styled-components';
import AddFarm from './AddFarm';

const OwnedFarms = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: auto;

    button {
        width: 100px;
        padding: 4px;
        margin: 4px;
        border: 1px solid black;
        border-radius: 4px;
    }

    #opened {
        display: absolute;
        top: 50;
        right: 50;
        border: 2px solid red;
    }

    #closed {
        display: none;
    }
`

const SingleFarm = styled.div`
    display: flex;
    justify-content: space-between;
`

export default function FarmList() {
    const Farms = useContext(FarmContext);
    const Users = useContext(UserContext);

    const [addOpen, setAddOpen] = useState(false);

    const pullFarms = () => {
        Farms.getOwnedFarms(Users.state.user.id)
        console.log("Farms Pulled. Make auto in future.")
    }

    return (
        <OwnedFarms>
            <div id={addOpen === true ? "opened" : "closed"}><AddFarm id={"add"}/></div>
            <button onClick={pullFarms}>Pull Farms</button>
            <button onClick={() => setAddOpen(!addOpen)}>Add Farm</button>
            {Farms.state.ownedFarms ? (
                <div>
                    {Farms.state.ownedFarms.map(farm => {
                        return (
                        <SingleFarm>
                            <h3>{farm.farmName}</h3>
                            <div>
                                <button>Locations</button>
                                <button>Settings</button>
                            </div>
                        </SingleFarm> )
                    })}
                </div>
            ) : (
                <div>
                    No Owned Farms
                </div>
            ) }
        </OwnedFarms>
    )
}
