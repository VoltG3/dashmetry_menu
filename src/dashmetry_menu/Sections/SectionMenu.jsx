import React from "react";
import styled from "styled-components";

const StyledNavigationContainer = styled.div`
    width: 30%;
    border: 1px solid blue;
    border-bottom-left-radius : 100px;
`

const NavButton = styled.button`
    display: block;
    width: 100%;
    padding: 12px 20px;
    background: ${({ active }) => active ? 'rgba(0,0,0,0.2)' : 'transparent'};
    border: none;
    cursor: pointer;
    font-size: 16px;
    text-align: left;
    color: black;

    p {
        padding-left: 20px;
        font-size: 50px;
        color: #cd830f;

        opacity: 0.5; /* Starting state */
        transition: opacity 0.5s ease-in-out;

    }

    :hover.p {
        color: #ff9600;

        opacity: 1;
    }
`

export default function SectionMenu({ activePage, setActivePage }) {

    return (
        <StyledNavigationContainer>
            <NavButton active={activePage === 'home'} onClick={() => setActivePage('home')}>
                <p>Home</p>
            </NavButton>

            <NavButton active={activePage === 'about'} onClick={() => setActivePage('about')}>
                <p>About</p>
            </NavButton>
        </StyledNavigationContainer>
    )
}
