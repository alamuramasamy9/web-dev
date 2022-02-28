import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
    
    <div class="list-group wd-textLeft wd-darkGreyBG mt-2" id='postSumm'>
        ${posts.map(post => {
            return PostSummaryItem(post)
        }).join('')}
    </div>
    `)

}
export default PostSummaryList