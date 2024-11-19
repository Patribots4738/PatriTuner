import { useState } from "react";
import ("./Settings.css");
import settings from 'electron-settings';

const Settings = () => {

    const [showSettings, setShowSettings] = useState(false);

    let settingsList = [
        "Simulated Robot",
        "Team Number"
    ]

    const settingsListUI = () => {
        let list = [];
        for (let i = 0; i < settingsList.length; i++) {
            let setting = settingsList[i];
            list.push(
                <div className="setting-card" key={i}>
                    <div className="setting-name">
                        <div className="settings-text">
                            {setting}:
                        </div>  
                    </div>
                    <div className="setting-current">
                        <div className="settings-text">
                            {/* TODO: GET ELECTRON SETTING HERE*/}
                        </div>
                    </div>  
                    <div className="change-button" onClick={() => handleSettingEdit(setting)}>
                        <div className="settings-text">
                            Edit
                        </div>
                    </div>
                </div>
            );
        }
        return list;
    }

    const handleSettingEdit = (setting: string) => {
        let newValue = prompt(`Type new ${setting}:`);
        if (newValue !== null) {
            // TODO: SET ELECTRON SETTING HERE
        }
    }

    function settingsWindow(): JSX.Element {
        return (
            <div className="settings-window" hidden={!showSettings}>
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