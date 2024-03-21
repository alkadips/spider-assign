import React, { useState } from "react";
import Sidebar from "./sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "./Header";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
  createData("Camera1(Video)", "9 am -7 pm", "LP default", 20),
];

const meetings = [
  {
    meet1: "Meeting Room 1",
    positions: "12 Positions",
    startdate: "Start from 12 Jan,2023-Ends at 15 Jan,2023",
  },
  {
    meet1: "Meeting Room 2",
    positions: "12 Positions",
    startdate: "Start from 12 Jan,2023-Ends at 15 Jan,2023",
  },
  {
    meet1: "Meeting Room 3",
    positions: "12 Positions",
    startdate: "Start from 12 Jan,2023-Ends at 15 Jan,2023",
  },
  {
    meet1: "Meeting Room 4",
    positions: "12 Positions",
    startdate: "Start from 12 Jan,2023-Ends at 15 Jan,2023",
  },
  {
    meet1: "Meeting Room 5",
    positions: "12 Positions",
    startdate: "Start from 12 Jan,2023-Ends at 15 Jan,2023",
  },
];

export default function Event() {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
     <Header/>
      <div className="d-flex background gap-10 justify-evenly">
        <div className="mt-20 ">
          <Sidebar className="event-sidebar-height" />
        </div>
        <div className="border p-20 mt-20 rounded mb-20">
          <div>
            <span className="text-2xl">Event Name</span>
            <span>(Venue Details)</span>
          </div>

          <div className="d-flex border  rounded gap-10 mt-20 w-75">
            <div
              className={`action-button ${activeButton === 1 ? "active" : ""}`}
              onClick={() => handleClick(1)}
            >
              Event Details
            </div>
            <div className="border-right1"></div>
            <div
              className={`action-button ${activeButton === 2 ? "active" : ""}`}
              onClick={() => handleClick(2)}
            >
              Assign Coordinator/Coordinator
            </div>
            <div className="border-right2"></div>

            <div
              className={`action-button ${activeButton === 3 ? "active" : ""}`}
              onClick={() => handleClick(3)}
            >
              Session Management
            </div>
            <div className="border-right3"></div>

            <div
              className={`action-button ${activeButton === 4 ? "active" : ""}`}
              onClick={() => handleClick(4)}
            >
              Generative SOW
            </div>
          </div>
          <div className="d-flex justify-between mt-20 gap-10">
            <div className="w-50">
              <div className="text-xl">Assign Coordinator</div>

              <div className="mt-3">
                <select className="select-coordinator w-full">
                  <option value="Search Contracttor">Search Contractor</option>
                </select>
                <div className="text-pink mt-3 text-xs">
                  Add New Coordinator
                </div>
              </div>
            </div>
            <div className="w-50">
              <div>
                <span className="text-xl"> Event Name</span>
                <span>(Venue Details)</span>
              </div>

              <div className="d-flex mt-3 border justify-around p-3">
                <div>
                  Start:<span className="font-bold">12-12-2023</span>{" "}
                </div>
                <div>
                  Ends: <span className="font-bold">15-12-2023</span>
                </div>
              </div>
              <div className="border mt-3 p-3">
                Venue Address:
                <span className="font-bold">
                  Some Location 12, Name Here, City, State.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 text-xl">Assign Contractor</div>

          <div className="d-flex gap-10">
            <div className="border mt-3 rounded p-5 meeting-room-height bg-black">
              {meetings.map((data) => {
                return (
                  <div className="p-3 border rounded mt-3">
                    <div className="d-flex align-center">
                      <div className="font-bold">{data.meet1}</div>
                      <div>
                        <img src="./images/Star.png" alt="upload"></img>
                      </div>
                      <div className="text-pink">{data.positions}</div>
                    </div>
                    <div>{data.startdate}</div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="mt-20">Positions</div>
              <div className="border rounded mt-3" style={{ padding: "2px" }}>
                <TableContainer className="background" component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className="background text-white">
                      <TableRow>
                        <TableCell align="left">Position</TableCell>
                        <TableCell align="left">Time</TableCell>
                        <TableCell align="left">Info</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="text-white">
                      {rows.map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                          <TableCell>
                            <select className="select-coordinator border">
                              <option value="Select Contracttor">
                                select Contractor
                              </option>
                            </select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <div className="d-flex align-items justify-center gap-10">
                  <img src="./images/arrowl.png" alt="upload"></img>
                  <img
                    src="./images/whitedot.png"
                    style={{ width: "6px" }}
                    alt="upload"
                  ></img>
                  <img
                    src="./images/pinkdot.png"
                    style={{ height: "10px" }}
                    alt="upload"
                  ></img>
                  <img src="./images/rightarrow.png" alt="upload"></img>
                </div>
              </div>
              <div className="d-flex align-items justify-center mt-20 rounded">
                <button className="bg-save-pink text-white p-5 rounded">
                  Save Edits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
