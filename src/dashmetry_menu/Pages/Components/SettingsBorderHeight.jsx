import {StyledButton} from "../Styles/StyledButton";


export const SettingsBorderHeight = ({ borderHeight, setBorderHeight }) => {

    return (
        <>
            <div className="section">
                <div className="first">
                    <p>borderheight</p>
                </div>

                <div className="second">
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={borderHeight}
                        onChange={(e) => setBorderHeight(Number(e.target.value))}
                    />
                    <span>{borderHeight}px</span>
                </div>

                <div className="third">
                    <StyledButton onClick={() => setBorderHeight(1)}>
                        Restore
                    </StyledButton>
                </div>
            </div>
        </>
    )
}
