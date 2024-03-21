import React from "react";
import EnhancedTable from "./table";
import Sidebar from "./sidebar";
import Header from "./Header";

export default function Demo() {
  return (
    <>
      <main className="background">
     <Header/>
        {/* ---------------------------------------------------------------------------section 2 */}
        <section>
          <div className="d-flex p-5 px-3">
          <Sidebar/>
            <div className=" border rounded w-85 margin-left">
              <div className="d-flex p-5 justify-between">
                <h1>Event Requests</h1>
                <div className="d-flex gap-10">
                  <div className="position-relative">
                   
                      <img className="search-icon" src="./images/search.png" alt="upload"></img>
                  
                    <input className="border-radius-input p-3 background search-input" placeholder="Search here"></input>
                  </div>

                  <div>
                    <img className="add-button" src="./images/add.png" alt="upload"></img>
                  </div>
                </div>
              </div>
              <div className="d-flex ">
                <EnhancedTable />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
