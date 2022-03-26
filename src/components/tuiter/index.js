import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HelloWorld from "../hello-world";
import Labs from "../labs/labs";
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return (
        <>
            <ExploreScreen />

            <Link to="/hello">Hello</Link>

            |

            <Link to="/">Labs</Link>
        </>
    )
};

export default Tuiter;
