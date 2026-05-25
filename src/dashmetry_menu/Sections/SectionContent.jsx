import styled from "styled-components";
import React from "react";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";

const StyledSectionContent = styled.div`
    width: 70%;
    border: 1px solid green;
    border-bottom-right-radius : 100px;
`

export default function SectionContent({ activePage }) {

    return (
        <StyledSectionContent>
            {activePage === 'home' && <HomePage />}
            {activePage === 'about' && <AboutPage />}
        </StyledSectionContent>
    )
}
