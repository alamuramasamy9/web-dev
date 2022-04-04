/*import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import Tuiter from "./components/tuiter/index.js";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen/index";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>

                    <Route path="/" element={<Labs/>}/>
                    <Route path="/tuiter" element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                    <Route path="/tuiter/profile" component={<ProfileScreen/>} />
                    <Route path="/hello" element={<HelloWorld/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;*/

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/labs";
import Index from "./components/tuiter/index.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileScreen from "./components/tuiter/ProfileScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
	                    <Route index element={<Labs />} />
	                    <Route path="labs" exact={true} element={<Labs />} />
                        <Route path="hello" element={<HelloWorld/>}/>
                        <Route path="tuiter" element={<Index/>}>
                            <Route index element={<HomeScreen/>}/>
                            <Route path="home" element={<HomeScreen/>}/>
                            <Route path="explore" element={<ExploreScreen/>}/>
                            <Route path="profile" element={<ProfileScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;






