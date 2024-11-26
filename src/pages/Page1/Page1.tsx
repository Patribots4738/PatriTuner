import React, { useState } from 'react';
import "./Page1.css";
import { v4 as uuidv4 } from 'uuid';
import GainValue from '../../components/GainValue/GainValue';

const Page1: React.FC = () => {

    const selectId: string = uuidv4();
    const options = {
        "Drive": "Talon",
        "Turn": "Talon",
        "HDC": "Holonomic",
        "Auto": "Holonomic"
    }

    const [system, setSystem] = useState<string>("Nothing");
    const [systemType, setSystemType] = useState<string>("Nothing");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as keyof typeof options;
        setSystem(value);
        setSystemType(options[value]);
    };

    const handleCopy = () => {
        // window.electronClipboard.writeText("lol!");
        // console.log("lol!");
    }

    const gridContent = () => {
        switch(systemType) {
            case "Talon":
                return (
                    <div className="gain-grid">
                        <GainValue NTKey={`/Calibration/${system}/0-P`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/1-I`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/2-D`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/3-S`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/4-V`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/5-G`} id={uuidv4()} readOnly={false}/>
                    </div>
                );
            case "Spark":
                return (
                    <div className="gain-grid">
                        <GainValue NTKey={`/Calibration/${system}/0-P`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/1-I`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/2-D`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/3-FF`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/4-IZone`} id={uuidv4()} readOnly={false}/>
                    </div>
                );
            case "Holonomic":
                return (
                    <div className="gain-grid">
                        <GainValue NTKey={`/Calibration/${system}/Translation/0-P`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/Translation/1-I`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/Translation/2-D`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/Rotation/0-P`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/Rotation/1-I`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/Rotation/2-D`} id={uuidv4()} readOnly={false}/>
                    </div>
                );
            default:
                return (
                    <div className="gain-grid">
                        <GainValue NTKey={`/Calibration/${system}/0-N`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/1-N`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/2-N`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/3-N`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/4-N`} id={uuidv4()} readOnly={false}/>
                        <GainValue NTKey={`/Calibration/${system}/5-N`} id={uuidv4()} readOnly={false}/>
                    </div>
                )
        }
    };

    return (
        <div className="gain-container">
            <div className="gain-header">
                <div className="gain-title">
                    <div className="title-text">
                        Tuning: {system} ({systemType})
                    </div>
                </div>
                <div className="gain-side">
                    <div className="gain-copy" onClick={handleCopy}>
                        <div className="copy-text">
                            Copy Gains
                        </div>
                    </div>
                    <select className="gain-select" id={selectId} onChange={handleSelectChange} defaultValue={"Nothing"}>
                        <option value="Nothing" disabled>
                            Subsystem
                        </option>
                        {Object.keys(options).map((option, index) => (
                            <option key={index} value={option} className="system-option">
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {gridContent()}
        </div>
    );
};

export default Page1;