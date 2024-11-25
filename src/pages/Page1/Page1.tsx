import React, { useState } from 'react';
import "./Page1.css";
import { v4 as uuidv4 } from 'uuid';
import NTNumber from '../../components/NTNumber/NTNumber';

const Page1: React.FC = () => {

    const selectId: string = uuidv4();
    const options = {
        "Drive": false,
        "Turn": false
    }

    const [system, setSystem] = useState<string>("Nothing");
    const [isTalon, setIsTalon] = useState<boolean>(false);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as keyof typeof options;
        setSystem(value);
        setIsTalon(options[value]);
    };

    return (
        <div className="gain-container">
            <div className="gain-header">
                <div className="gain-title">
                    <div className="title-text">
                        Tuning: {system}
                    </div>
                </div>
                <div className="gain-side">
                    <div className="gain-copy">
                        <div className="copy-text">
                            Copy Gains
                        </div>
                    </div>
                    <select className="gain-select" id={selectId} onChange={handleSelectChange}>
                        <option value="Nothing" selected disabled>
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
            <div className="gain-grid">
                <NTNumber NTKey={`/Calibration/${system}/0-P`} id={uuidv4()} readOnly={false}/>
                <NTNumber NTKey={`/Calibration/${system}/1-I`} id={uuidv4()} readOnly={false}/>
                <NTNumber NTKey={`/Calibration/${system}/2-D`} id={uuidv4()} readOnly={false}/>
                <NTNumber NTKey={`/Calibration/${system}/3-S`} id={uuidv4()} readOnly={false}/>
                <NTNumber NTKey={`/Calibration/${system}/4-V`} id={uuidv4()} readOnly={false}/>
                <NTNumber NTKey={`/Calibration/${system}/5-G`} id={uuidv4()} readOnly={false}/>
            </div>
        </div>
    );
};

export default Page1;