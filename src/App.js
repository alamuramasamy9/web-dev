import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import Tuiter from "./components/tuiter/index.js";

import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           exact={true}
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

