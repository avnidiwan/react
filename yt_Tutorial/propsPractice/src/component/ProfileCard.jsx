import React from "react";
import "./ProfileCard.css";
// import Users from './users'

const ProfileCard = 
// ({name,username,bio,posts,followers,following,avatar,}) 
(props)=> {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img className="avatar" src={props.avatar} alt={`${props.name}'s avatar`} />
        <div className="profile-info">
          <h2 className="name">{props.name}</h2>
          <p className="username">@{props.username}</p>
          <p className="bio">{props.bio}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">{props.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-number">{props.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">{props.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="profile-action">
        <button className="btn follow">Follow</button>
        <button className="btn message">Message</button>
      </div>
    </div>
  );
};

export default ProfileCard;
