import who from './who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js'

const WhoToFollowList = () => {
    return (`
        <div class="list-group wd-textLeft mb-2">
            <a href="#" class="list-group-item list-group-item-action wd-fontBold wd-font16 wd-darkGreyBG wd-noBorders wd-whiteFont">
                Who to follow
            </a>
            ${who.map(w => {
                return WhoToFollowListItem(w);
            }).join('')}
            <a href="#" class="list-group-item list-group-item-action wd-fontBold wd-lightBlueFont wd-darkGreyBG wd-noBorders wd-whiteFont">
                Show More
            </a>
        </div>
        <div class="wd-flex-column wd-font10 wd-lightGreyFont ">
            <div class="wd-flex-row wd-flex-justifySpaceAround">
                <a href="#" class="wd-noLinkDecor">Terms of Service</a>
                <a href="#" class="wd-noLinkDecor">Privacy Policy</a>
                <a href="#" class="wd-noLinkDecor">Cookie Policy</a>
            </div>
            <div class="wd-flex-row wd-flex-justifySpaceAround">
                <a href="#" class="wd-noLinkDecor">Ads info</a>
                <a href="#" class="wd-noLinkDecor">More
                    <i class="fas fa-ellipsis-h" style="color: gray;"></i>
                </a>
                <a href="#" class="wd-noLinkDecor">© 2021 Twitter, Inc.</a>
            </div>

        </div>
    `)
}

export default WhoToFollowList;
