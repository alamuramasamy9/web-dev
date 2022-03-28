import React from "react";
import { Route } from "react-router";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeComponent";
import ProfileScreen from "./ProfileScreen";
import whoReducer from "/reducers/who-reducer";
import tweets from "reducers/tweets";
import profile from "reducers/profile"


const reducer = combineReducers({ tweets: tweets, whoReducer, profile })
const store = createStore(reducer);

const Build7 = () => {
    return (
        <Provider store={store}>
            <Route path={["/tuiter", "/tuiter/home"]} exact={true} component={HomeScreen} />
            <Route path="/tuiter/explore" exact={true} component={ExploreScreen} />
            <Route path="/tuiter/profile" exact={true} component={ProfileScreen} />
        </Provider>
    )
};

export default Build7;