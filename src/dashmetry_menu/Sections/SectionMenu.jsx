import React from "react";
import styled from "styled-components";
import { lightenColor } from "../utils/colorUtils";

const StyledNavigationContainer = styled.div`
    width: 30%;
    //border: 1px solid blue;
    border-bottom-left-radius : ${({ $br }) => $br}px;
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
`

const NavText = styled.p`
    padding-left: 20px;
    font-size: ${({ $fontSize }) => $fontSize}px;
    color: ${({ $color }) => $color};

    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;

    &:hover {
        color: ${({ $hoverColor }) => $hoverColor};
        opacity: 1;
    }
`

export default function SectionMenu({ activePage, setActivePage, pColor, br, menuFontSize }) {

    const hoverColor = lightenColor(pColor);

    return (
        <StyledNavigationContainer $br={br}>

            <NavButton active={activePage === 'player'} onClick={() => setActivePage('player')}>
                <NavText $color={pColor} $hoverColor={hoverColor} $fontSize={menuFontSize}>Player</NavText>
            </NavButton>

            <NavButton active={activePage === 'visual'} onClick={() => setActivePage('visual')}>
                <NavText $color={pColor} $hoverColor={hoverColor} $fontSize={menuFontSize}>Visual</NavText>
            </NavButton>

            <NavButton active={activePage === 'settings'} onClick={() => setActivePage('settings')}>
                <NavText $color={pColor} $hoverColor={hoverColor} $fontSize={menuFontSize}>Settings</NavText>
            </NavButton>

            <NavButton active={activePage === 'credits'} onClick={() => setActivePage('credits')}>
                <NavText $color={pColor} $hoverColor={hoverColor} $fontSize={menuFontSize}>Credits</NavText>
            </NavButton>

            <NavButton active={activePage === 'labels'} onClick={() => setActivePage('labels')}>
                <NavText $color={pColor} $hoverColor={hoverColor} $fontSize={menuFontSize}>Labels</NavText>
            </NavButton>

        </StyledNavigationContainer>
    )
}
