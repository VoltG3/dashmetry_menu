import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";


export const SettingsBorderRadius = ({ borderRadius, setBorderRadius }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>borderradius</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <input
                    type="range"
                    min="0"
                    max="150"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                />
                <span>{borderRadius}px</span>
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => setBorderRadius(100)}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
