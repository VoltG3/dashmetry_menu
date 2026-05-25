import React from "react";
import styled from "styled-components";

const StyledNavigationContainer = styled.div`
    width: 30%;
    //border: 1px solid blue;
    border-bottom-left-radius : 100px;
`

export default function SectionMenu() {

    return (
        <StyledNavigationContainer>
            <p className="paragraph_mod_options">Player</p>
            <p className="paragraph_mod_options">Movement</p>
            <p className="paragraph_mod_options">Visuals</p>
            <p className="paragraph_mod_options">Gameplay</p>
            <p className="paragraph_mod_options">Settings</p>
            <p className="paragraph_mod_options">Credits</p>
        </StyledNavigationContainer>
    )
}