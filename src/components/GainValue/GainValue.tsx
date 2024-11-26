import { NetworkTablesTypeInfos } from "ntcore-ts-client";
import { useEffect, useState } from 'react';
import useNTState from "../../lib/ntcore-react/useNTState.ts";
import "./GainValue.css";


interface GainValueProps {
    NTKey: string;
    id: string,
    readOnly: boolean
}

const GainValue: React.FC<GainValueProps> = (props: GainValueProps) => {
    const { NTKey, id, readOnly } = props;

    const [NTValue, setNTValue] = useNTState<number>(
        NTKey,
        NetworkTablesTypeInfos.kDouble,
        -1.0
    );

    const [textValue, setTextValue] = useState("");

    // Listen for update to NT topic
    useEffect(() => {
        if (document.activeElement !== document.getElementById(id)) {
            setTextValue(String(NTValue));
        }
    }, [NTValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        if (!isNaN(Number(value)) && isFinite(Number(value))) {
            setTextValue(value);
            setNTValue(Number(value));
        } else if (value === "-") {
            setTextValue(value);
        }
    };

    const multiplyValue = (value: number) => {
        setNTValue(NTValue * value);
    }

    return (
        <div className="number-container">
            <div className="key-text">{NTKey.substring(NTKey.length - 1)}</div>
            <input type="text" disabled={readOnly} value={!textValue.includes('e') ? textValue.substring(0, 7) : '0'} onChange={handleChange} className="number-display" id={id}/>
            <div className="gain-button-row">
                <div className="gain-button" onClick={() => multiplyValue(0.5)}>
                    <div className="gain-button-text">x0.5</div>
                </div>
                <div className="gain-button" onClick={() => multiplyValue(2.0)}>
                    <div className="gain-button-text">x2.0</div>
                </div>
            </div>
        </div>
    );
};

export default GainValue;