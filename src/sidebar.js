import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div className="border rounded p-5">
              <div className="d-flex">
                 <select className="select-coordinator w-full border text-pink">
                  <option value="Event">Event</option>
                </select>
              </div>
              <div className="margin-left-20">
                <div className="d-flex">
                  <div>
                    <img src="./images/pinkcurve.png" alt="dropdown"></img>
                  </div>
                  <div className="mt-3 border background border-radius-input text-pink p-5 text-xs w-full">
                   
                    New Request
                  </div>
                </div>
                <div className="d-flex justify-between align-center">
                  <div className="d-flex justify-center">
                   
                      <img className="margin-top-20-minus" src="./images/whitecurve.png" alt="dropdown"></img>
                    
                    <div className="mt-30 margin-left-20">Estimate</div>
                  </div>
                  <div className="text-pink count-back">9</div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img className="margin-top-20-minus" src="./images/whitecurve.png" alt="dropdown"></img>
                  </div>
                  <Link to="/event">
                  <div className="margin-left-20 mt-30">Events</div>
                  </Link>
                  
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img className="margin-top-20-minus" src="./images/whitecurve.png" alt="dropdown"></img>
                  </div>
                  <div className="margin-left-20 mt-30">Partial Requests</div>
                </div>
                <div className="mt-30 font-bold text-xl">Positions</div>
                <div className="mt-30 font-bold text-xl">Contractors</div>
                <div className="d-flex align-center justify-between">
                  <div className="mt-30 font-bold text-xl">Users</div>
                  <div>
                    <img className="mt-30" src="./images/drop.png" alt="dropdown"></img>
                  </div>
                </div>
                <div className="d-flex align-center mt-20">
                  <div>
                    <img style={{width:'10px'}} src="./images/whitecurve.png" alt="dropdown"></img>
                  </div>
                  <div className="mt-30 margin-left-20">Admins</div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img className="margin-top-20-minus" src="./images/whitecurve.png" alt="dropdown"></img>
                  </div>
                  <div className="mt-30 margin-left-20">Clients</div>
                </div>
                <div className="d-flex align-center">
                  <div>
                    <img className="margin-top-20-minus" src="./images/whitecurve.png" alt="dropdown"></img>
                  </div>
                  <div className="mt-20 margin-left-20">Coordinators</div>
                </div>
                <div className="mt-30 font-bold text-xl">Profile</div>
              </div>

              <div className="d-flex bg-black text-white gap-10 margin-top-100 rounded p-5 header-section">
                <div>
                  <img src="./images/Upload.png" alt="upload"></img>
                </div>
                <div>Logout</div>
              </div>
            </div>

    </>
  )
}
