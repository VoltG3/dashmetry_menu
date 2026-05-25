import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledButton} from "../Styles/StyledButton";


export const LabelsFps = ({ showFps, setShowFps }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>Fps</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <StyledButton onClick={() => setShowFps(prev => !prev)}>
                    {showFps ? 'Hide FPS' : 'Show FPS'}
                </StyledButton>
            </StyledContentOptions>

            <StyledContentRestore>

            </StyledContentRestore>
        </StyledContentSection>
    )
}
