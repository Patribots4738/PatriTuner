import NTProvider from "./lib/ntcore-react/NTProvider.tsx";
import NTNumber from "./components/NTNumber/NTNumber.tsx";
import Settings from "./components/Settings/Settings.tsx";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {

    return (    
        <NTProvider uri={"localhost"}>
            <div className="grid-container">
                <div className="grid-item">
                    <NTNumber NTKey={"/AdvantageKit/SubsystemInputs/Climb/RightPositionMeters"} id={uuidv4()} readOnly={true}/>
                </div>
                <div className="grid-item">
                    <NTNumber NTKey={"/Calibration/Climb/0-P"} id={uuidv4()} readOnly={false}/>
                </div>
                <div className="grid-item">
                    <NTNumber NTKey={"/Calibration/Climb/1-I"} id={uuidv4()} readOnly={false}/>
                </div>
                <div className="grid-item">
                    <NTNumber NTKey={"/Calibration/Climb/2-D"} id={uuidv4()} readOnly={false}/>
                </div>
                <div className="grid-item">
                    <NTNumber NTKey={"/Calibration/Climb/3-FF"} id={uuidv4()} readOnly={false}/>
                </div>
                <div className="grid-item">
                    <NTNumber NTKey={"/Calibration/Climb/4-IZone"} id={uuidv4()} readOnly={false}/>
                </div>
            </div>
            <Settings/>
        </NTProvider>
    );
}

export default App;