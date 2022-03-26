

import React from 'react'

const verifiedIcon = <span className="fa-stack fa-xs" style={{ fontSize: "0.5rem" }}>
    <i className="fas fa-certificate fa-stack-2x wd-whiteFont"></i>
    <i className="fas fa-check fa-inverse fa-stack-1x wd-blackFont"></i>
</span>


const PostItem = ({ post, key }) => {
    return (
        <>
            <div key={key} className="wd-flex-column">

                <div className='wd-flex-row'>
                    <div className='wd-flex-column'>
                        <img src={post.profilePhoto} height="40px" width="40px" className="wd-borderRadiusCircle me-2" alt="" />
                    </div>
                    <div className='wd-flex-column ps-2'>
                        <div>
                            <span className=" wd-whiteFont wd-fontBold">{post.username} </span>
                            {post.verified ? verifiedIcon : ``}
                            <span className=" wd-lightGreyFont"> @{post.handle} . {post.time} </span>
                        </div>

                        <div className='mb-3'>
                            <span className=" wd-whiteFont">{post.title}</span>
                        </div>
                    </div>
                </div>


                <div className='wd-borderRadius12px border border-dark' >
                    <img src={post.image} width="100%" height="264px" className='wd-borderRadius12px' alt=""/>
                    {post.descriptionHeading &&
                        <>
                            <br />
                            <p className=" ps-3 pe-3 pt-3 pb-1  border-top border-dark">
                                <span className="wd-whiteFont wd-fontBold"> {post.descriptionHeading} </span>
                                <br />
                                <span className="wd-lightGreyFont">{post.description}</span>
                                <br />
                                <i className="fa fa-link" aria-hidden="true" style={{ color: "rgb(110, 118, 125)" }}></i>
                                &nbsp; <span className="wd-lightGreyFont">{post.externalLink} </span>
                            </p>
                        </>
                    }
                </div>

            </div>


            <div className='wd-flex-row wd-flex-justifySpaceBetween wd-flex-alignCenter ps-4 pe-4 mt-2' >
                <a href='/' id='comment' className='wd-noLinkDecor wd-lightGreyFont'>
                    <i className="far fa-comment"></i>
                    {post.comment}
                </a>
                <a href='/' id='retweet' className='wd-noLinkDecor'>
                    <i className="fas fa-retweet"></i>
                    {post.retweet}
                </a>
                <a href='/' id='like' className='wd-noLinkDecor'>
                    <i className="far fa-heart"></i>
                    {post.like}
                </a>
                <a href='/' id='share' className='wd-noLinkDecor'>
                    <i className="fas fa-upload"></i>
                </a>
            </div>



            <hr className='wd-whiteFont'></hr>
        </>
    )

}
export default PostItem

