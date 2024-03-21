import React from 'react'

export default function Header() {
  return (
   
         <section>
        <div className="header-section background position-relative">
          <img
            src="./images/InfoCircle.png"
            alt="infocircle"
            className="img-width"
          ></img>

          <img
            src="./images/Notification.png"
            alt="notification"
            className="img-width"
          ></img>
          <img
            src="./images/pinkdot.png"
            alt="notification"
            className="pinknotification"
          ></img>

          <div className="name-font-size">
            <div>
              <span> Hi,</span>
              <span className="green"> Muhammad Asad</span>
            </div>

            <div>welcome back!</div>
          </div>

          <img src="./images/profile.png" alt="profile"></img>
        </div>
      </section>
   
  )
}
