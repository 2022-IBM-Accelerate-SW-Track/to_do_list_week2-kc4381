import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kiara</div>
            <div className="brief_description">
              <ul>
                <li> Hi! I'm Kiara and I'm from Long Island, New York </li>

                Interests: 
                <li> I like working out! </li>
                <li> I enjoy reading books and listening to music! </li>

                Fun fact: 
                <li> I have a boston terrier and his name is Milo! </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
