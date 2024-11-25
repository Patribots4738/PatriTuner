import { useState } from "react";
import ("./Settings.css");
import { v4 as uuidv4 } from 'uuid';

const Settings: React.FC = () => {

    const [showSettings, setShowSettings] = useState(false);

    let settingsList = [
        "Team Number"
    ]

    interface SettingsOptionProps {
        id: string,
        setting: string,
    }

    const SettingsOption: React.FC<SettingsOptionProps> = (props: SettingsOptionProps) => {
        const { id, setting } = props;

        const [settingActive, setSettingActive] = useState(false);

        const handleSettingEdit = () => {
            if (settingActive) {
                let value = (document.getElementById(id) as HTMLInputElement).value;
                localStorage.setItem(setting, value);
                setSettingActive(false);
                window.location.reload();
            } else {
                setSettingActive(true);
            }
        };

        return (
            <div className="setting-card">
                <div className="setting-name">
                    <div className="settings-text">
                        {setting}:
                    </div>  
                </div>
                <div className="setting-current">
                    <div className="settings-text">
                        <input 
                            type="text"
                            id={id}
                            disabled={!settingActive} 
                            defaultValue={localStorage.getItem(setting) as string}
                            className="settings-input"/>
                    </div>
                </div>
                <div className="change-button" onClick={() => handleSettingEdit()}>
                    <div className="settings-text">
                        {settingActive ? "Apply" : "Edit"}
                    </div>
                </div>
            </div>
        );
    };

    const settingsListUI = () => {
        let list = [];
        for (let i = 0; i < settingsList.length; i++) {
            let setting = settingsList[i];
            list.push(
                <div key={i}>
                    <SettingsOption id={uuidv4()} setting={setting}/>
                </div>
            );
        }
        return list;
    }

    function flipSimulatedRobot() {
        localStorage.setItem(
            "Simulated Robot", 
            localStorage.getItem("Simulated Robot") === "true" 
                ? "false" 
                : "true");
        window.location.reload();
    }

    function settingsWindow(): JSX.Element {
        return (
            <div className="settings-window" hidden={!showSettings}>
                <div 
                    className="change-button-2" 
                    onClick={() => flipSimulatedRobot()}>
                    <div className="settings-text">
                        Connect to {localStorage.getItem("Simulated Robot") === "true" ? "Robot" : "Simulation"}
                    </div>
                </div>
                {settingsListUI()}
            </div>
        )
    }

    return (
        <div>
            {settingsWindow()}
            <div className="settings-button" onClick={() => setShowSettings(!showSettings)}>Settings</div>
        </div>
    );

}
export default Settings;