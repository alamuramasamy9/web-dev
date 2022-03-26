import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import Todos from "./todo";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Todos/>
            <ConditionalOutput/>

            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/explore">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;

