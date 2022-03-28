import React from "react";
import posts from "./posts.json"
import PostItem from "./PostItem"

const PostList = () => {
    return (
        <div className="list-group wd-textLeft">
            {posts.map((post, i) => {
                return <PostItem post={post} key={i} />
            })}
        </div>
    )

}
export default PostList