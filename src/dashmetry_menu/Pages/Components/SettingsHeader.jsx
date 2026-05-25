import {StyledButton} from "../Styles/StyledButton";


export const SettingsHeader = ({ onRestoreAll }) => {

    return (
        <>
            <div className="section">
                <div className="first">
                    <h1>Settings</h1>
                </div>
                <div className="second">

                </div>
                <div className="third">
                    <StyledButton onClick={onRestoreAll}>
                        Restoreall
                    </StyledButton>
                </div>
            </div>
        </>
    )
}
