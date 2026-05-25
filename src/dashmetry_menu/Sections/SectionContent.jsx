import styled from "styled-components";
import React from "react";

const StyledSectionContent = styled.div`
    width: 70%;
    //border: 1px solid green;
    border-bottom-right-radius : 100px;
`

export default function SectionContent() {

    return (
        <StyledSectionContent>
            <p>mods_settings</p>
        </StyledSectionContent>
    )
}