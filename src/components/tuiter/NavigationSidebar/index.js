import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = 'explore' }) => {
    return (
        <>

            <div className="list-group">

                <Link to="/"
                    className="list-group-item wd-noLinkLineDecor">
                    <i className="fab fa-twitter"></i>
                </Link>

                <Link to="/tuiter/home"
                    className={`list-group-item wd-noLinkLineDecor ${active === 'home' ? 'active' : ''}`}>
                    <i className="fas fa-home wd-width20 wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Home</span>
                </Link>

                <Link to="/tuiter/explore"
                    className={`list-group-item wd-noLinkLineDecor ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag wd-width20 wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Explore</span>
                </Link>

                <Link to="#"
                    className={`list-group-item wd-noLinkLineDecor`}>
                    <i className="far fa-bell wd-width20 wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Notifications</span>
                </Link>

                <Link to="#"
                    className={`list-group-item wd-noLinkLineDecor `}>
                    <i className="far fa-envelope wd-width20 wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Messages</span>
                </Link>

                <Link to="#"
                    className={`list-group-item wd-noLinkLineDecor`}>
                    <i className="far fa-bookmark wd-width20 wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Bookmarks</span>
                </Link>

                <Link to="#"
                    className={`list-group-item wd-noLinkLineDecor`}>
                    <i className="far fa-list-alt wd-width20  wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Lists</span>
                </Link>

                <Link to="/tuiter/profile"
                    className={`list-group-item wd-noLinkLineDecor ${active === 'profile' ? 'active' : ''}`}>
                    <i className="far fa-user wd-width20 wd-whiteFont"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                </Link>

                <Link to="#"
                    className={`list-group-item wd-noLinkLineDecor`}>
                    <span className="fa-stack wd-width20 fa-xs" >
                        <i className="far fa-circle fa-stack-2x wd-whiteFont"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x wd-whiteFont"></i>
                    </span>
                    <span className="d-none d-xl-inline"> &nbsp;More</span>
                </Link>

            </div>

            <button type="button" className="btn btn-primary wd-blueButton wd-width100 mt-3 pt-2 pb-2 wd-borderRadius50 wd-allowOverflow ps-0 pe-0">Tuit</button>

        </>
    )
}

export default NavigationSidebar;
