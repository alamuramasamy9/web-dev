import React from "react";
import { Route } from "react-router";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen/index";
import whoReducer from "./reducers/who-reducer";
import tuitReducer from "./reducers/tuit-reducer";
import profileReducer from "./reducers/profile-reducer"

const reducer = combineReducers({ tuits: tuitReducer, who: whoReducer, profile: profileReducer })
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
            <Route path="/tuiter" exact={true} component={HomeScreen} />
            <Route path="/tuiter/explore" exact={true} component={ExploreScreen} />
            <Route path="/tuiter/profile" exact={true} component={ProfileScreen} />
        </Provider>
    )
};

export default Tuiter;