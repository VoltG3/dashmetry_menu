import { StyledPage } from "./Styles/StyledPage";
import {StyledPageContainer} from "./Styles/StyledPageContainer";
import {SettingsBackground} from "./Components/SettingsBackground";
import {SettingsGradient} from "./Components/SettingsGradient";
import {SettingsTextColor} from "./Components/SettingsTextColor";
import {SettingsBorderRadius} from "./Components/SettingsBorderRadius";
import {SettingsBorderColor} from "./Components/SettingsBorderColor";
import {SettingsBorderHeight} from "./Components/SettingsBorderHeight";
import {SettingsTextSizes} from "./Components/SettingsTextSizes";
import {SettingsHeader} from "./Components/SettingsHeader";


export default function SettingsPage({ setBgColor1, bgColor1, setBgColor2, bgColor2, gradientEnabled, setGradientEnabled, pColor, setPColor, h1Color, setH1Color, borderRadius, setBorderRadius, borderColor, setBorderColor, borderHeight, setBorderHeight, menuFontSize, setMenuFontSize, headerFontSize, setHeaderFontSize, contentFontSize, setContentFontSize, contentPColor, setContentPColor, contentH1Color, setContentH1Color }) {

    const handleRestoreAll = () => {
        setBgColor1('#ffa500');
        setBgColor2('#ffff00');
        setGradientEnabled(true);
        setPColor('#cd830f');
        setH1Color('#ff9a00');
        setContentPColor('#ff9a00');
        setContentH1Color('#ff9a00');
        setMenuFontSize(35);
        setHeaderFontSize(60);
        setContentFontSize(16);
        setBorderRadius(100);
        setBorderColor('#888888');
        setBorderHeight(1);
    };

    return (
        <StyledPage $br={borderRadius}>
            <StyledPageContainer>
               <SettingsHeader onRestoreAll={handleRestoreAll} />
               <SettingsBackground bgColor1={bgColor1} setBgColor1={setBgColor1} bgColor2={bgColor2} setBgColor2={setBgColor2} />
               <SettingsGradient gradientEnabled={gradientEnabled} setGradientEnabled={setGradientEnabled} />
               <SettingsTextColor pColor={pColor} setPColor={setPColor} h1Color={h1Color} setH1Color={setH1Color} contentPColor={contentPColor} setContentPColor={setContentPColor} contentH1Color={contentH1Color} setContentH1Color={setContentH1Color} />
               <SettingsTextSizes menuFontSize={menuFontSize} setMenuFontSize={setMenuFontSize} headerFontSize={headerFontSize} setHeaderFontSize={setHeaderFontSize} contentFontSize={contentFontSize} setContentFontSize={setContentFontSize} />
               <SettingsBorderRadius borderRadius={borderRadius} setBorderRadius={setBorderRadius} />
               <SettingsBorderColor borderColor={borderColor} setBorderColor={setBorderColor} />
               <SettingsBorderHeight borderHeight={borderHeight} setBorderHeight={setBorderHeight} />
            </StyledPageContainer>
        </StyledPage>
    )
}
