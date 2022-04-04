import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {

    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profile.profile)

    const editProfileClickHandler = () => {
        dispatch({ type: "isEdit-profileReducer", isEdit: true })
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getMonth = (monthIndex) => {
        let month = monthNames[parseInt(monthIndex) - 1]
        return month
    }

    const getDateOfBirth = (dateOfBirth) => {
        let dobParts = dateOfBirth.split('/')
        let month = getMonth(dobParts[0])
        let date = dobParts[1]
        let year = dobParts[2]
        return month + " " + date + ", " + year
    }

    const getDateJoined = (dateJoined) => {
        let dateJoinedParts = dateJoined.split('/')
        let month = getMonth(dateJoinedParts[0])
        let year = dateJoinedParts[1]
        return month + ", " + year
    }

    return (
        <>

            <div className='wd-whiteFont wd-fontBold wd-font20 mb-3 wd-flex wd-flex-row wd-flex-wrap'>
                <div>
                    <Link to="/a7/twitter/home">
                        <i className="fas fa-arrow-left wd-whiteFont wd-font20"></i>
                    </Link>
                </div>
                <div className='wd-flex wd-flex-column'>
                    <span>&nbsp;&nbsp;&nbsp; {profile.firstName} {profile.lastName}</span>
                    <span className='wd-font12 wd-lightGreyFont ps-2'> &nbsp;&nbsp;&nbsp; 5,196 Tuits</span>
                </div>
            </div>

            <img
                height="250px"
                width="100%"
                src={`/images/${profile.bannerPicture}`}
                alt=""
            />

            <img
                src={`/images/${profile.profilePicture}`}
                width='150px'
                height='150px'
                className='rounded-circle border border-dark'
                style={{
                    position: "relative",
                    marginTop: "-75px",
                    marginLeft: "10px",
                }}
                alt=""
            />

            <button
                className="border border-white wd-blackBG wd-whiteFont wd-borderRadius20px pt-1 pb-1 ps-2 pe-2"
                style={{ float: "right", marginTop: "20px", marginRight: "20px" }}
                onClick={editProfileClickHandler}
            >
                Edit Profile
            </button>

            <p className="pb-2 pt-2">
                <span className="wd-whiteFont wd-font30 wd-fontBold">{profile.firstName} {profile.lastName}</span>
                <br />
                @{profile.handle}
            </p>

            <p className="wd-whiteFont"> {profile.bio} </p>

            <p>
                <i class="fas fa-map-marker-alt"></i> {profile.location}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fas fa-birthday-cake"></i> Born {getDateOfBirth(profile.dateOfBirth)}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="far fa-calendar-alt"></i> Joined {getDateJoined(profile.dateJoined)}
            </p>

            <p>
                <span className="wd-whiteFont wd-fontBold">{profile.followingCount}</span> Following
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="wd-whiteFont wd-fontBold">{profile.followersCount}</span> Followers
            </p>


        </>
    )
};

export default ProfileComponent;