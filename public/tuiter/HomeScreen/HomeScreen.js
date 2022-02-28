import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

const init = () => {
    const postSumm = $("#postSumm");
    postSumm.addClass('bg-dark');
}
$(init);



(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="pt-3 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 col-2  ">
                ${NavigationSidebar('home')}
            </div>
            <div class="pt-3 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 col-9 wd-flex-column wd-borderDiv border-top-0 border-bottom-0">
                ${HomeComponent()}
            </div>
            <div class="pt-3 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 wd-textCenter ">
                ${PostSummaryList()}
            </div>
        </div>
    `);
})($);

