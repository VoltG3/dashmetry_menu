import {StyledButton} from "../Styles/StyledButton";


export const SettingsBorderRadius = ({ borderRadius, setBorderRadius }) => {

    return (
        <>
            <div className="section">
                <div className="first">
                    <p>borderradius</p>
                </div>

                <div className="second">
                    <input
                        type="range"
                        min="0"
                        max="150"
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                    />
                    <span>{borderRadius}px</span>
                </div>

                <div className="third">
                    <StyledButton onClick={() => setBorderRadius(100)}>
                        Restore
                    </StyledButton>
                </div>
            </div>
        </>
    )
}
