
const PostSummaryItem = (post) => {
    return (`
        <a href="#" class="list-group-item list-group-item-action wd-transparentBG wd-noLinkOutline">
            <div class="wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter">
                <div class="wd-flex-row">
                    <div class="wd-flex-column">
                        <div>
                            <span class="wd-lightGreyFont wd-font14">${post.topic}</span>
                            <br>
                            <b class="wd-whiteFont wd-font14">${post.userName}</b>
                            <span class="fa-stack fa-xs" style="font-size: 0.5rem;">
                                <i class="fas fa-certificate fa-stack-2x" style="color: white"></i>
                                <i class="fas fa-check fa-inverse fa-stack-1x" style="color: black"></i>
                            </span>
                            <span class="wd-lightGreyFont wd-font14">- ${post.time}</span>
                        </div>
                        <div class="wd-whiteFont wd-font14">${post.title}</div>
                        ${post.tuits ? `<span class="wd-lightGreyFont">${post.tutis} Tweets</span>` : ``} 
                    </div>
                </div>
                <div>
                    <img src=${post.image} width="80px" height="80px" class="rounded"></img>
                </div>
            </div>
        </a>
    `)

}
export default PostSummaryItem