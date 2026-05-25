import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";


export const SettingsHeader = ({ onRestoreAll }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <h1>Settings</h1>
            </StyledContentSectionName>
            <StyledContentOptions>

            </StyledContentOptions>
            <StyledContentRestore>
                <StyledButton onClick={onRestoreAll}>
                    Restoreall
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
