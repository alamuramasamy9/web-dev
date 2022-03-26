import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="wd-flex-row wd-flex-alignStart wd-flex-justifySpaceBetween mb-2">
                    <div class="wd-flex-row wd-flex-justifyStart wd-flex-alignCenter wd-searchBoxDiv wd-borderRadius50 pt-1 pb-1 wd-whiteBG">
                        <i class="fa fa-search me-2 ms-2" style="color: gray;" ></i>
                        <input style="border: none;" class="wd-searchBox wd-transparentBG" placeholder="Search Tuiter">
                    </div>

                    <a href="explore-settings.html">
                        <i class="fas fa-cog fa-2x" style="color:dodgerblue;"></i>
                    </a>
                </div>
            </div>

            <nav class="mb-2">
                <div class="nav nav-tabs wd-font15" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-forYou-tab" data-toggle="tab" href="../for-you.html" role="tab" aria-controls="nav-forYou" aria-selected="true">For You</a>
                    <a class="nav-item nav-link" id="nav-trending-tab" data-toggle="tab" href="../trending.html" role="tab" aria-controls="nav-trending" aria-selected="false">Trending</a>
                    <a class="nav-item nav-link" id="nav-news-tab" data-toggle="tab" href="../news.html" role="tab" aria-controls="nav-news" aria-selected="false">News</a>
                    <a class="nav-item nav-link" id="nav-sports-tab" data-toggle="tab" href="../sports.html" role="tab" aria-controls="nav-sports" aria-selected="true">Sports</a>
                    <a class="nav-item nav-link d-none d-lg-block" id="nav-entertainment-tab" data-toggle="tab" href="../entertainment.html" role="tab" aria-controls="nav-entertainment" aria-selected="true">Entertainment</a>
                </div>
            </nav>

           <a href="#" class="list-group-item list-group-item-action pt-0 pb-0 ps-0 pe-0 wd-transparentBG">
                <div class="position-relative wd-textCenter wd-whiteFont">
                    <img src="../starship.jpg" alt="starship" width="100%" >
                    <div class="position-absolute wd-font20 wd-fontBold" style="bottom: 8px; left: 16px; z-index: 1000">SpaceX's Starship</div>
                </div>
            </a>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
