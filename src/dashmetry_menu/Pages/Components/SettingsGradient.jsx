import {StyledButton} from "../Styles/StyledButton";
import {StyledSwitch} from "../Styles/StyledSwitch";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";

export const SettingsGradient = ({ gradientEnabled, setGradientEnabled }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>lineargradient</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <StyledSwitch onClick={() => setGradientEnabled(prev => !prev)}>
                    {gradientEnabled ? 'On' : 'Off'}
                </StyledSwitch>
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => setGradientEnabled(true)}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
