import React from 'react'
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = ({ src }) => {
    return (
        <div className={`list-group wd-textLeft mt-2 ${src === 'home' ? 'wd-font14' : ''}`} id='postSumm'>
            {src === 'home' &&
                <div className='wd-font18 wd-fontBold wd-whiteFont ps-3 pt-2 pb-2 list-group-item' >
                    What's Happening
                </div>
            }
            {posts.map((post, i) => {
                return <PostSummaryItem post={post} key={i} />
            })}
        </div>
    )
}

export default PostSummaryList