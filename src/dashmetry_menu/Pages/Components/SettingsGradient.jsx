import {StyledButton} from "../Styles/StyledButton";
import {StyledSwitch} from "../Styles/StyledSwitch";


export const SettingsGradient = ({ gradientEnabled, setGradientEnabled }) => {

    return (
        <>
            <div className="section">
                <div className="first">
                    <p>lineargradient</p>
                </div>

                <div className="second">
                    <StyledSwitch onClick={() => setGradientEnabled(prev => !prev)}>
                        {gradientEnabled ? 'On' : 'Off'}
                    </StyledSwitch>
                </div>

                <div className="third">
                    <StyledButton onClick={() => setGradientEnabled(true)}>
                        Restore
                    </StyledButton>
                </div>
            </div>
        </>
    )
}
