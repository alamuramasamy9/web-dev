import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js"

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="pt-3 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2 ">
                ${NavigationSidebar('explore')}
            </div>
            <div class="pt-3 col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-10 col-9 wd-flex-column wd-borderDiv border-top-0 border-bottom-0">
                ${ExploreComponent()}
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-3 pt-3 col-xxl-3 wd-textCenter ">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
})($);
