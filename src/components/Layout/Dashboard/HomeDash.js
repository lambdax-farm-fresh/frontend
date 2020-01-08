import React from 'react'

import styled from "styled-components";
var jumboimg = require('../../../assets/img/jumbo.jpg');

const HomeHold = styled.div`
    display: flex;
    height: 100%;
    padding: 4px;
`;

const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4px;
`

const SideBar = styled.div`
    width: 400px;
    padding: 4px;
`

const JumboIntro = styled.div`
    border-radius: 6px;
    height: 200px;
    background-image: url(${jumboimg});
    background-size: cover;
    
    h2 {
        font-size: 1.3em;
    }

    #top-of-jumbo {
        padding: 4px;
        font-size: 2.5em;
        width: 100%;
        height: 100%;
        color: rgba(255,255,255,1);
        display: flex;
        align-items: end;
    }
`;

export default function HomeDash() {
    return (
        <HomeHold>
            <MainContent>
                <JumboIntro>
                    <div id="top-of-jumbo">
                        Top of Jumbo
                    </div>
                </JumboIntro>
                <div>
                    Recommended Farms
                </div>
            </MainContent>
            <SideBar>
                Sidebar
            </SideBar>
        </HomeHold>
    )
}
