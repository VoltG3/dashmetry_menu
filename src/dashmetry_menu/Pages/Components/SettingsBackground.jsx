import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";

export const SettingsBackground = ({ bgColor1, setBgColor1, bgColor2, setBgColor2 }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>bg</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <input
                    type="color"
                    value={bgColor1}
                    onChange={(e) => setBgColor1(e.target.value)}
                />
                <input
                    type="color"
                    value={bgColor2}
                    onChange={(e) => setBgColor2(e.target.value)}
                />
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => { setBgColor1('#ffa500'); setBgColor2('#ffff00'); }}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}