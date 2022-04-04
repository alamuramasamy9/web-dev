import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="pt-3 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 ">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="pt-3 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-10 wd-flex-column wd-borderDiv border-top-0 border-bottom-0"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 pt-3 col-xxl-3 wd-textCenter ">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default ExploreScreen;