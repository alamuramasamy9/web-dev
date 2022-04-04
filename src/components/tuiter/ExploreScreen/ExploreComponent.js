import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="wd-flex-row wd-flex-alignStart wd-flex-justifySpaceBetween mb-3">
                    <div className="wd-flex-row wd-flex-justifyStart wd-flex-alignCenter wd-searchBoxDiv wd-borderRadius50 pt-1 pb-1 wd-whiteBG">
                        <i className="fa fa-search me-2 ms-2" style={{ color: "gray" }}></i>
                        <input style={{ border: "none" }} className="wd-searchBox wd-transparentBG" placeholder="Search Tuiter" />
                    </div>

                    <a href="explore-settings.html">
                        <i className="fas fa-cog fa-2x" style={{ color: "dogerblue" }}></i>
                    </a>
                </div>
            </div>

            <nav className="mb-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-forYou-tab" data-toggle="tab" href="../for-you.html" role="tab" aria-controls="nav-forYou" aria-selected="true">For You</a>
                    <a className="nav-item nav-link" id="nav-trending-tab" data-toggle="tab" href="../trending.html" role="tab" aria-controls="nav-trending" aria-selected="false">Trending</a>
                    <a className="nav-item nav-link" id="nav-news-tab" data-toggle="tab" href="../news.html" role="tab" aria-controls="nav-news" aria-selected="false">News</a>
                    <a className="nav-item nav-link" id="nav-sports-tab" data-toggle="tab" href="../sports.html" role="tab" aria-controls="nav-sports" aria-selected="true">Sports</a>
                    <a className="nav-item nav-link" id="nav-entertainment-tab" data-toggle="tab" href="../entertainment.html" role="tab" aria-controls="nav-entertainment" aria-selected="true">Entertainment</a>
                </div>
            </nav>

            <a href="/" className="list-group-item list-group-item-action pt-0 pb-0 ps-0 pe-0 wd-transparentBG">
                <div className="position-relative wd-textCenter wd-whiteFont">
                    <img src="/images/starship.jpg" alt="starship" width="100%" />
                    <div className="position-absolute wd-font20 wd-fontBold" style={{ bottom: "8px", left: "16px", zIndex: "1000" }}>SpaceX's Starship</div>
                </div>
            </a>

            <PostSummaryList src='explore' />
        </>
    );
}
export default ExploreComponent;
