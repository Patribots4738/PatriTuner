import NTProvider from "./lib/ntcore-react/NTProvider.tsx";
import NTNumber from "./components/NTNumber/NTNumber.tsx";
import Settings from "./components/Settings/Settings.tsx";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
    const sim: boolean = localStorage.getItem("Simulated Robot") === "true" ? true : false;
    const team: string = (localStorage.getItem("Team Number") as string).length === 4 ? (localStorage.getItem("Team Number") as string) : "4738";
    const uri: string = sim ? "localhost" : `10.${team.substring(0, 2)}.${team.substring(2, 4)}.2`;
    console.log(uri);

    return (    
        <NTProvider uri={uri}>
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