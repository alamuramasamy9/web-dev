import React from 'react'
import who from './who.json'
import WhoToFollowListItem from './WhoToFollowListItem';


const WhoToFollowList = () => {
    return (
        <>
            <div className="list-group wd-textLeft mb-2">
                <a href="#" className="list-group-item list-group-item-action wd-fontBold wd-font16 wd-darkGreyBG wd-noBorders wd-whiteFont">
                    Who to follow
                </a>
                {who.map((w, i) => {
                    return <WhoToFollowListItem who={w} key={i} />;
                })}
                <a href="#" className="list-group-item list-group-item-action wd-fontBold wd-lightBlueFont wd-darkGreyBG wd-noBorders wd-whiteFont">
                    Show More
                </a>
            </div>
            <div className="wd-flex-column wd-font10 wd-lightGreyFont ">
                <div className="wd-flex-row wd-flex-justifySpaceAround">
                    <a href="#" className="wd-noLinkDecor">Terms of Service</a>
                    <a href="#" className="wd-noLinkDecor">Privacy Policy</a>
                    <a href="#" className="wd-noLinkDecor">Cookie Policy</a>
                </div>
                <div className="wd-flex-row wd-flex-justifySpaceAround">
                    <a href="#" className="wd-noLinkDecor">Ads info</a>
                    <a href="#" className="wd-noLinkDecor">More
                        <i className="fas fa-ellipsis-h" style={{ color: "gray" }}></i>
                    </a>
                    <a href="#" className="wd-noLinkDecor">© 2021 Twitter, Inc.</a>
                </div>

            </div>
        </>
    )
}

export default WhoToFollowList;
