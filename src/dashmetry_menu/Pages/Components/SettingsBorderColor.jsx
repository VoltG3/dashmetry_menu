import {StyledButton} from "../Styles/StyledButton";


export const SettingsBorderColor = ({ borderColor, setBorderColor }) => {

    return (
        <>
            <div className="section">
                <div className="first">
                    <p>bordercolor</p>
                </div>

                <div className="second">
                    <input
                        type="color"
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                    />
                </div>

                <div className="third">
                    <StyledButton onClick={() => setBorderColor('#888888')}>
                        Restore
                    </StyledButton>
                </div>
            </div>
        </>
    )
}
