import React from "react";
import {Outlet} from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import whoReducer from "./reducers/who-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import profileReducer from "./reducers/profile-reducer"

const reducer = combineReducers({ tuits: tuitReducer, who: whoReducer, profile: profileReducer })
const store = createStore(reducer);

const Index = () => {
    return (
        <Provider store={store}>
            <Outlet/>
        </Provider>
    )
};

export default Index;