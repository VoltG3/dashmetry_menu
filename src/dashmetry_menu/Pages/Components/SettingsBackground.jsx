import {StyledButton} from "../Styles/StyledButton";


export const SettingsBackground = ({ bgColor1, setBgColor1, bgColor2, setBgColor2 }) => {

    return (
        <>
            <div className="section">
                <div className="first">
                    <p>bg</p>
                </div>

                <div className="second">
                    <input
                        type="color"
                        value={bgColor1}
                        onChange={(e) => setBgColor1(e.target.value)}
                    />
                    <input
                        type="color"
                        value={bgColor2}
                        onChange={(e) => setBgColor2(e.target.value)}
                    />
                </div>

                <div className="third">
                    <StyledButton onClick={() => { setBgColor1('#ffa500'); setBgColor2('#ffff00'); }}>
                        Restore
                    </StyledButton>
                </div>
            </div>
        </>
    )
}