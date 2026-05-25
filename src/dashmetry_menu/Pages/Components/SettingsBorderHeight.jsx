import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";


export const SettingsBorderHeight = ({ borderHeight, setBorderHeight }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>borderheight</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={borderHeight}
                    onChange={(e) => setBorderHeight(Number(e.target.value))}
                />
                <span>{borderHeight}px</span>
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => setBorderHeight(1)}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
