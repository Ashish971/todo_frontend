import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Component/Home";
import Register from "./Component/Register";
import Login from "./Component/login";
// import Logout from "./components/Logout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    {/*<Route path="/logout" element={<Logout/>} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;