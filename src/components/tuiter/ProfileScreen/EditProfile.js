import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditProfile = () => {

    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profile.profile)
    const [profileData, saveProfile] = useState(profile)

    const editProfileClickHandler = () => {
        dispatch({ type: 'save-profileReducer', profile: profileData })
        dispatch({ type: "isEdit-profileReducer", isEdit: false })
    }

    const getModifiedDate = (date) => {
        let dateParts = date.split("/")
        if (dateParts[1].length === 2)
            return dateParts[2] + "-" + dateParts[0] + "-" + dateParts[1]
        else return dateParts[1] + "-" + dateParts[0] + "-" + dateParts[2]
    }

    return (
        <div>

            <div className='wd-whiteFont wd-fontBold wd-font20 mb-3'>

                <i className="fas fa-times wd-whiteFont wd-font20" onClick={() => dispatch({ type: "isEdit-profileReducer", isEdit: false })}></i>

                &nbsp;&nbsp;&nbsp; Edit Profile

                <button className="border-0 text-black bg-white wd-borderRadius20px pt-1 pb-1 ps-3 pe-3 float-right wd-font16" onClick={editProfileClickHandler}>
                    Save
                </button>

            </div>


            <img
                height="250px"
                width="100%"
                src={`/images/${profile.bannerPicture}`} alt=""
            />

            <img
                src={`/images/${profile.profilePicture}`}
                width='150px'
                height='150px'
                className='rounded-circle border border-dark' alt=""
                style={{
                    position: "relative",
                    marginTop: "-75px",
                    marginLeft: "10px",
                }}
            />

            <form className='mt-4'>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        className="form-control bg-secondary text-white"
                        id="name"
                        placeholder="Firstname and Lastname"
                        value={`${profileData.firstName} ${profileData.lastName}`}
                        onChange={(e) => {
                            let nameParts = e.target.value.split(' ')
                            saveProfile({
                                ...profileData,
                                firstName: nameParts[0],
                                lastName: nameParts[1]
                            })
                        }}>
                    </input>
                </div>

                <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea className="form-control bg-secondary text-white" id="bio" rows="3" value={profileData.bio}
                        onChange={(e) => {
                            saveProfile({
                                ...profileData,
                                bio: e.target.value
                            })
                        }}>
                    </textarea>
                </div>

                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" className="form-control bg-secondary text-white" id="location" value={profileData.location}
                        onChange={(e) => {
                            saveProfile({
                                ...profileData,
                                location: e.target.value
                            })
                        }}></input>
                </div>

                <div class="form-group">
                    <label for="website">Website</label>
                    <input type="text" className="form-control bg-secondary text-white" id="website" value={profileData.website}
                        onChange={(e) => {
                            saveProfile({
                                ...profileData,
                                website: e.target.value
                            })
                        }}></input>
                </div>

                <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input type="date" className="form-control bg-secondary text-white" id="birthday"
                        value={getModifiedDate(profileData.dateOfBirth)}
                        onChange={(e) => {
                            let dateParts = e.target.value.split('-')
                            let dob = ""
                            if (dateParts[2].length === 4)
                                dob = dateParts[1] + '/' + dateParts[0] + '/' + dateParts[2]
                            else
                                dob = dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0]
                            saveProfile({
                                ...profileData,
                                dateOfBirth: dob
                            })
                        }}
                    ></input>
                </div>

            </form>

        </div>
    )
};

export default EditProfile;