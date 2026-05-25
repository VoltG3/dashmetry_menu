import {StyledPageContent} from "./Styles/StyledPageContent";
import {StyledContentContainer} from "./Styles/Content/StyledContentContainer";
import {LabelsFps} from "./Components/LabelsFps";


export default function LabelsPage({ showFps, setShowFps }) {

    return (
        <StyledPageContent>
            <StyledContentContainer>
                <LabelsFps showFps={showFps} setShowFps={setShowFps} />
            </StyledContentContainer>
        </StyledPageContent>
    )
}