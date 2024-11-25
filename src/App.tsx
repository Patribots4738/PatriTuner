import NTProvider from "./lib/ntcore-react/NTProvider.tsx";
import Settings from "./components/Settings/Settings.tsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Page1 from "./pages/Page1/Page1.tsx";
import Page2 from "./pages/Page2/Page2.tsx";
import Page3 from "./pages/Page3/Page3.tsx";

const App: React.FC = () => {

    let settingsList = [
        "Team Number"
    ]

    for (let i = 0; i < settingsList.length; i++) {
        let setting: string = settingsList[i];
        if (localStorage.getItem(setting) === null) {
            localStorage.setItem(setting, "");
            console.log("Setting " + setting)
        }
    }

    const sim: boolean = localStorage.getItem("Simulated Robot") === "true" ? true : false;
    const team: string = (localStorage.getItem("Team Number") as string).length === 4 ? (localStorage.getItem("Team Number") as string) : "0000";
    const uri: string = sim ? "localhost" : `10.${team.substring(0, 2)}.${team.substring(2, 4)}.2`;
    console.log(uri);

    return (    
        <NTProvider uri={uri}>
            <Router>
                <Navbar/>
                <div className="page-container">
                    <Routes>
                        <Route path="/" element={<Page1/>} />
                        <Route path="/Page2" element={<Page2/>} />
                        <Route path="/Page3" element={<Page3/>} />
                    </Routes>
                </div>
                <Settings/>
            </Router>
        </NTProvider>   
    );  
}

export default App;