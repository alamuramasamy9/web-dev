import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import EditProfile from "./EditProfile";
import ProfileComponent from "./ProfileComponent";

const ProfileScreen = () => {

    const dispatch = useDispatch()
    const isEditProfile = useSelector((state) => state.profile.isEditing)

    // useEffect(() => {
    //     dispatch({ type: "isEdit-profile", isEdit: false })
    // }, [])

    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile" />
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{ "position": "relative" }}>
                {isEditProfile ? <EditProfile /> : <ProfileComponent />}
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList src="profile" />
            </div>
        </div>
    )
}

export default ProfileScreen;