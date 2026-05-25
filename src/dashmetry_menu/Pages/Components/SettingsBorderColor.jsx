import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";


export const SettingsBorderColor = ({ borderColor, setBorderColor }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>bordercolor</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <input
                    type="color"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                />
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => setBorderColor('#888888')}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
