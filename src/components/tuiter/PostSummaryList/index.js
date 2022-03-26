import React from 'react'
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = ({ src }) => {
    return (
        <div className={`list-group wd-textLeft wd-darkGreyBG mt-2 ${src === 'home' ? 'wd-font13' : ''}`} id='postSumm'>
            {posts.map((post, i) => {
                return <PostSummaryItem post={post} key={i} />
            })}
        </div>
    )
}

export default PostSummaryList