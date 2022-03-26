const WhoToFollowListItem = (who) => {
    return (`
        <a href="#" class="list-group-item list-group-item-action wd-darkGreyBG wd-noBorders ">
            <div class="wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter">
            <div class="wd-flex-row">

                <img src=${who.avatarIcon} height="40px" width="40px" class="wd-borderRadiusCircle me-2">
                <div class="wd-flex-column">
                    <div>
                        <b class="wd-whiteFont wd-font13">${who.userName}</b>
                        <span class="fa-stack fa-xs" style="font-size: 0.5rem;">
                                <i class="fas fa-certificate fa-stack-2x" style="color: white"></i>
                                <i class="fas fa-check fa-stack-1x" style="color: black"></i>
                            </span>
                    </div>
                    <div class="wd-lightGreyFont wd-font12">@${who.handle}</div>
                </div>
            </div>
                <div>
                    <button class="btn-sm btn-primary wd-font13 wd-borderRadius50 pt-1 pb-1"> Follow </button>
                </div>
            </div>
        </a>
    `);
}
export default WhoToFollowListItem;
