import React  from "react";
import { useSelector } from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import EditProfile from "./EditProfile";
import ProfileComponent from "./ProfileComponent";

const ProfileScreen = () => {

    const isEditProfile = useSelector((state) => state.profile.isEditing)

    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profileReducer" />
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{ "position": "relative" }}>
                {isEditProfile ? <EditProfile /> : <ProfileComponent />}
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <PostSummaryList src="profileReducer" />
            </div>
        </div>
    )
}

export default ProfileScreen;