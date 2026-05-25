import {StyledButton} from "../Styles/StyledButton";
import {StyledContentSection} from "../Styles/Content/StyledContentSection";
import {StyledContentSectionName} from "../Styles/Content/StyledContentSectionName";
import {StyledContentOptions} from "../Styles/Content/StyledContentOptions";
import {StyledContentRestore} from "../Styles/Content/StyledContentRestore";


export const SettingsTextSizes = ({ menuFontSize, setMenuFontSize, headerFontSize, setHeaderFontSize, contentFontSize, setContentFontSize }) => {

    return (
        <StyledContentSection>
            <StyledContentSectionName>
                <p>textsizes</p>
            </StyledContentSectionName>

            <StyledContentOptions>
                <div>
                    <p>menu</p>
                    <input
                        type="range"
                        min="10"
                        max="80"
                        value={menuFontSize}
                        onChange={(e) => setMenuFontSize(Number(e.target.value))}
                    />
                    <p>{menuFontSize}px</p>
                </div>
                <div>
                    <p>header</p>
                    <input
                        type="range"
                        min="20"
                        max="100"
                        value={headerFontSize}
                        onChange={(e) => setHeaderFontSize(Number(e.target.value))}
                    />
                    <p>{headerFontSize}px</p>
                </div>
                <div>
                    <p>content</p>
                    <input
                        type="range"
                        min="10"
                        max="40"
                        value={contentFontSize}
                        onChange={(e) => setContentFontSize(Number(e.target.value))}
                    />
                    <p>{contentFontSize}px</p>
                </div>
            </StyledContentOptions>

            <StyledContentRestore>
                <StyledButton onClick={() => { setMenuFontSize(35); setHeaderFontSize(60); setContentFontSize(16); }}>
                    Restore
                </StyledButton>
            </StyledContentRestore>
        </StyledContentSection>
    )
}
