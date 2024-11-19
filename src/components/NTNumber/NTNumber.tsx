import { NetworkTablesTypeInfos } from "ntcore-ts-client";
import { useEffect, useState } from 'react';
import useNTState from "../../lib/ntcore-react/useNTState.ts";
import "./NTNumber.css";


interface NTNumberProps {
    NTKey: string;
    id: string,
    readOnly: boolean
}

const NTNumber = (props: NTNumberProps) => {
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

    return (
        <div className="number-container">
            <p>{NTKey}</p>
            <input type="text" disabled={readOnly} value={!textValue.includes('e') ? textValue.substring(0, 7) : '0'} onChange={handleChange} className="number-display" id={id}/>
        </div>
    );
};

export default NTNumber;