import styled from "styled-components";
import React from "react";

import SettingsPage from "../Pages/SettingsPage";
import PlayerPage from "../Pages/PlayerPage";
import VisualsPage from "../Pages/VisualsPage";
import CreditsPage from "../Pages/CreditsPage";
import LabelsPage from "../Pages/LabelsPage";

const StyledSectionContent = styled.div`
    width: 70%;
    border-bottom-right-radius : ${({ $br }) => $br}px;
    border-left: ${({ $borderHeight }) => $borderHeight}px solid ${({ $borderColor }) => $borderColor};
    margin-bottom: 8px;
    font-size: ${({ $contentFontSize }) => $contentFontSize}px;
    p { color: ${({ $contentPColor }) => $contentPColor}; }
    h1 { color: ${({ $contentH1Color }) => $contentH1Color}; }
`

export default function SectionContent({ activePage, setBgColor1, bgColor1, setBgColor2, bgColor2, gradientEnabled, setGradientEnabled, pColor, setPColor, h1Color, setH1Color, borderRadius, setBorderRadius, borderColor, setBorderColor, borderHeight, setBorderHeight, contentFontSize, menuFontSize, setMenuFontSize, headerFontSize, setHeaderFontSize, setContentFontSize, contentPColor, setContentPColor, contentH1Color, setContentH1Color, showFps, setShowFps }) {

    return (
        <StyledSectionContent $br={borderRadius} $borderColor={borderColor} $borderHeight={borderHeight} $contentFontSize={contentFontSize} $contentPColor={contentPColor} $contentH1Color={contentH1Color}>
            {activePage === 'credits' && <CreditsPage />}
            {activePage === 'settings' && <SettingsPage setBgColor1={setBgColor1} bgColor1={bgColor1} setBgColor2={setBgColor2} bgColor2={bgColor2} gradientEnabled={gradientEnabled} setGradientEnabled={setGradientEnabled} pColor={pColor} setPColor={setPColor} h1Color={h1Color} setH1Color={setH1Color} borderRadius={borderRadius} setBorderRadius={setBorderRadius} borderColor={borderColor} setBorderColor={setBorderColor} borderHeight={borderHeight} setBorderHeight={setBorderHeight} menuFontSize={menuFontSize} setMenuFontSize={setMenuFontSize} headerFontSize={headerFontSize} setHeaderFontSize={setHeaderFontSize} contentFontSize={contentFontSize} setContentFontSize={setContentFontSize} contentPColor={contentPColor} setContentPColor={setContentPColor} contentH1Color={contentH1Color} setContentH1Color={setContentH1Color} />}
            {activePage === 'player' && <PlayerPage />}
            {activePage === 'visual' && <VisualsPage />}
            {activePage === 'labels' && <LabelsPage showFps={showFps} setShowFps={setShowFps} />}
        </StyledSectionContent>
    )
}
