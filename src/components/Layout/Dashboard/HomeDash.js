import React from 'react'

import styled from "styled-components";

const HomeHold = styled.div`

`;

const JumboIntro = styled.div`
    padding: 16px;
    background-color: rgba(0,0,0,.015);
    
    h2 {
        font-size: 1.1em;
    }
`;

export default function HomeDash() {
    return (
        <HomeHold>
            <JumboIntro>
                Welcome to Farm Fresh
            </JumboIntro>
            More home stuff can go here.
        </HomeHold>
    )
}
