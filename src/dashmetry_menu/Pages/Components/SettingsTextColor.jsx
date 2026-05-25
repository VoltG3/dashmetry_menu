import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";


export const SettingsTextColor = ({ pColor, setPColor, h1Color, setH1Color, contentPColor, setContentPColor, contentH1Color, setContentH1Color }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>textcolor</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <input
                    type="color"
                    value={pColor}
                    onChange={(e) => setPColor(e.target.value)}
                />
                <input
                    type="color"
                    value={h1Color}
                    onChange={(e) => setH1Color(e.target.value)}
                />
                <input
                    type="color"
                    value={contentPColor}
                    onChange={(e) => setContentPColor(e.target.value)}
                />
                <input
                    type="color"
                    value={contentH1Color}
                    onChange={(e) => setContentH1Color(e.target.value)}
                />
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => { setPColor('#cd830f'); setH1Color('#ff9a00'); setContentPColor('#ff9a00'); setContentH1Color('#ff9a00'); }}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
