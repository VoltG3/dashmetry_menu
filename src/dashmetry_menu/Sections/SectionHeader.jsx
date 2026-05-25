import styled from "styled-components";
import React from "react";
import { lightenColor } from "../utils/colorUtils";

const StyledSectionHeader = styled.div`
    display: flex;
    justify-content: center;
    width : 100%;
    height : 100px;
    border-top-left-radius : ${({ $br }) => $br}px;
    border-top-right-radius : ${({ $br }) => $br}px;
    border-bottom: ${({ $borderHeight }) => $borderHeight}px solid ${({ $borderColor }) => $borderColor};
    margin: 0 10px;
    width: calc(100% - 20px);
    align-items: center;
`

const MenuH1 = styled.h1`
    color: ${({ $color }) => $color};
    font-size: ${({ $fontSize }) => $fontSize}px;

    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;

    &:hover {
        color: ${({ $hoverColor }) => $hoverColor};
        opacity: 1;
    }
`

export default function SectionHeader({ h1Color, br, borderColor, borderHeight, headerFontSize }) {

    const hoverColor = lightenColor(h1Color);

    return (
        <StyledSectionHeader $br={br} $borderColor={borderColor} $borderHeight={borderHeight}>
            <MenuH1 $color={h1Color} $hoverColor={hoverColor} $fontSize={headerFontSize}>Dasmetry Menu PAID</MenuH1>
        </StyledSectionHeader>
    )
}
