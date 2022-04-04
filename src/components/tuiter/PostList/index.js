import React from "react";
import posts from "./posts.json"
import PostItem from "./PostItem"

const PostList = () => {
    return (
        <div className="list-group wd-textLeft">
            <span className='wd-whiteFont wd-fontBold'>Home</span>
            <hr className='wd-whiteFont' />
            {posts.map((post, i) => {
                return <PostItem post={post} key={i} />
            })}
        </div>
    )

}
export default PostList