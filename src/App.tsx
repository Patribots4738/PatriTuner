import NTProvider from "./lib/ntcore-react/NTProvider.tsx";
import NTNumber from "./components/NTNumber/NTNumber.tsx";
import "./App.css";

function App() {
    const numberOfElements = 9; // Number of elements in the grid
    const NTKey = "/Calibration/Climb/0-P"; // NTKey prop for all elements

    return (
        <NTProvider uri={"localhost"}>
            <div className="grid-container">
                {Array.from({ length: numberOfElements }).map((_, index) => (
                    <div className="grid-item">
                        <NTNumber key={index} NTKey={NTKey}/>
                    </div>
                ))}
            </div>
        </NTProvider>
    );
}

export default App;