import styled from "styled-components";
import React from "react";

const StyledSectionHeader = styled.div`
    display: flex;
    justify-content: center;
    width : 100%;
    height : 100px;
    border-top-left-radius : 100px;
    border-top-right-radius : 100px;
    border: 1px solid black;
    align-items: center;

    .menu_h1 {
        color: #ff9a00;
        font-size: 60px;

        opacity: 0.5; /* Starting state */
        transition: opacity 0.5s ease-in-out;
    }
    
    :hover.menu_h1 {
         color: #ffff2b;

         opacity: 1;
     }
`

export default function SectionHeader({title}) {

    return (
        <StyledSectionHeader>
            <h1 className="menu_h1">Dasmetry Menu PAID</h1>
        </StyledSectionHeader>
    )
}