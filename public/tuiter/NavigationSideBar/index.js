

const NavigationSidebar = (active) => {
    return (`


    <div class="btn-group-vertical wd-width100 wd-darkGreyBG wd-borderRadius4px" role="group" >

        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-home">
            <i class="fab fa-twitter  wd-width20 " style="color: white;"></i>
        </label>

        <input type="radio" class="btn-check wd-navBtn " name="vbtn-radio" id="navbtn-home" autocomplete="off" ${active=='home'? `checked`:`` } onClick='location.href="../HomeScreen/home.html"'>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-home">
            <i class="fas fa-home wd-width20" style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">Home</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-explore" autocomplete="off" ${active=='explore'? `checked`:``} onClick='location.href="../ExploreScreen/explore.html"' >
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-explore">
            <i class="fas fa-hashtag wd-width20" style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">Explore</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-notif" autocomplete="off" ${active=='notif'? `checked`:``} onClick='location.href="../notifications.html"'>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-notif">
            <i class="far fa-bell wd-width20" style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">Notifications</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-msg" autocomplete="off" ${active=='message'? `checked`:`` } onClick='location.href="../messages.html"'>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-msg">
            <i class="far fa-envelope wd-width20" style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">Messages</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-bookmark" autocomplete="off" ${active=='bookmarks'? `checked`:`` } onClick='location.href="../bookmarks.html"'>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-bookmark">
            <i class="far fa-bookmark wd-width20" style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">Bookmarks</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-list" autocomplete="off" ${active=='lists'? `checked`:`` } onClick='location.href="../lists.html"'>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-list">
            <i class="far fa-list-alt wd-width20 " style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">Lists</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-profile" autocomplete="off" ${active=='profile'? `checked`:`` } onClick='location.href="../profile.html"'>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-profile">
            <i class="far fa-user wd-width20" style="color: white;"></i>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont ">Profile</span>
        </label>

        <input type="radio" class="btn-check wd-navBtn" name="vbtn-radio" id="navbtn-more" autocomplete="off" ${active=='home'? `more`:`` }>
        <label class="btn border text-start border-0 pt-2 pb-2 " for="navbtn-more">
            <span class="fa-stack wd-width20 fa-xs" style="font-size: 0.5rem;">
                <i class="far fa-circle fa-stack-2x" style="color: white;"></i>
                <i class="fas fa-ellipsis-h fa-stack-1x" style="color: white;"></i>
            </span>
            <span class="d-none d-xl-inline wd-font14 wd-whiteFont">More</span>
        </label>

    </div>
    <br>

    <button type="button" class="btn btn-primary wd-blueButton wd-width100 mt-3 pt-2 pb-2 wd-borderRadius50 wd-allowOverflow wd-font14 ps-0 pe-0">Tuit</button>
    `);
}
export default NavigationSidebar;
