import React from 'react'

import { Helmet } from 'react-helmet'

import './profile-creation-2.css'

const ProfileCreation2 = (props) => {
  return (
    <div className="profile-creation2-container">
      <Helmet>
        <title>Profile-Creation-2 - exported project</title>
        <meta
          property="og:title"
          content="Profile-Creation-2 - exported project"
        />
      </Helmet>
      <div className="profile-creation2-profilecreation2">
        <div className="profile-creation2-group34button">
          <span className="profile-creation2-text">
            <span>Next</span>
          </span>
        </div>
        <div className="profile-creation2-group35button">
          <span className="profile-creation2-text02">
            <span>Skip</span>
          </span>
        </div>
        <span className="profile-creation2-text04">
          <span>Which of these best describes your diet?</span>
        </span>
        <div className="profile-creation2-diettypebutton">
          <span className="profile-creation2-text06">
            <span>Vegetarian</span>
          </span>
        </div>
        <div className="profile-creation2-diettypebutton1">
          <span className="profile-creation2-text08">
            <span>Gluten Free</span>
          </span>
        </div>
        <div className="profile-creation2-diettypebutton2">
          <span className="profile-creation2-text10">
            <span>Dairy Free</span>
          </span>
        </div>
        <div className="profile-creation2-diettypebutton3">
          <span className="profile-creation2-text12">
            <span>Vegan</span>
          </span>
          <span className="profile-creation2-text14">
            <span>Vegan</span>
          </span>
        </div>
        <div className="profile-creation2-diettype">
          <span className="profile-creation2-text16">
            <span>Pescatarian</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCreation2
