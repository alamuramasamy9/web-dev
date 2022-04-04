import React from 'react'

const PostSummaryItem = ({ post, key }) => {
    return (
        <a key={key} href="/" className="list-group-item list-group-item-action wd-noLinkOutline">
            <div className="wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter">
                <div className="wd-flex-row pe-2">
                    <div className="wd-flex-column">
                        <div>
                            <span className="wd-lightGreyFont">{post.topic}</span>
                            <br />
                            <b className="wd-whiteFont">{post.userName}</b> &nbsp;
                            <span className="fa-stack fa-xs" style={{ fontSize: "0.5rem" }}>
                                <i className="fas fa-certificate fa-stack-2x wd-whiteFont" ></i>
                                <i className="fas fa-check fa-inverse fa-stack-1x wd-blackFont" ></i>
                            </span>
                            <span className="wd-lightGreyFont">- {post.time}</span>
                        </div>
                        <div className="wd-whiteFont">{post.title}</div>
                        {post.tuits && <span className="wd-lightGreyFont">{post.tuits} Tuits</span>}
                    </div>
                </div>
                <div>
                    <img src={post.image} alt="" width="80px" height="80px" className="rounded"></img>
                </div>
            </div>
        </a>
    )
}

export default PostSummaryItem