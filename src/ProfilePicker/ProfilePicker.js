import React from "react";
import "./ProfilePicker.css";

const ProfilePicker = ({ profiles, heading }) => {
  const baseLink = "https://targetpractise-3737.restdb.io/media";

  const profileList = profiles.map(profile => {
    return (
      <div className="profile" key={profile._id}>
        <img src={`${baseLink}/${profile.image[0]}`} />
        <span className="desc">{profile.name}</span>
      </div>
    );
  });

  return (
    <div>
      <div className="Heading">
        <h1>{heading}</h1>
      </div>
      <div className="Wrapper">
        {profileList}
        <div className="profile">
          <div className="plus">
            <p>Add a profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicker;
