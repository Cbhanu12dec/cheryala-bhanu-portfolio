import React, { useState } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Content from "./components/main/Content";
import mainimg from "../src/components/assets/back-img.jpeg";
import { FaEllipsisV } from "react-icons/fa";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="App px-2 md:px-14 flex flex-col mt-2">
      <div
        className=" h-14 bg-app-terinary-color md:hidden w-full flex flex-row items-center px-6 z-50"
        style={{ boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)" }}
      >
        <div className="">
          <FaEllipsisV
            color="#8c8c8e"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          />
        </div>
      </div>
      {/* Profile page */}
      <div className="flex flex-row transition duration-100 ease-in-out">
        <div
          className={`app-info-bar profile-page bg-app-terinary-color col-span-3 transition duration-100 ease-in-out max-h-screen ${
            isNavOpen
              ? "absolute left-0 top-0  z-50 basis-[100%] w-[75%] transition duration-100 ease-in-out"
              : "md:block hidden relative basis-[26%]"
          }`}
          style={{
            boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            transition: "transition: .55s ease-in-out",
          }}
        >
          <Profile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div
          className="portfolio-content relative overflow-scroll w-screen bg-content-bg"
          style={{
            position: "relative",
            // overflow: "scroll",
            width: "95vw",
            height: "calc(100vh - 30px)",
            transition: ".55s ease-in-out",
          }}
        >
          <div
            className="prt-curtain w-full h-full opacity-0"
            style={{
              background: "rgba(30,30,40,.88)",
              transition: ".55s ease-in-out",
              opacity: 0,
              width: "100%",
              height: "100%",
            }}
          ></div>
          <div
            className="absolute w-full top-0 overflow-hidden"
            style={{
              backgroundImage: `url(${mainimg})`,
              overflow: "hidden",
              position: "absolute",
              width: "100%",
              top: 0,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "end",
              height: "400px",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <div
              className="part-overlay relative w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,rgba(30,30,40,.93) 0%,rgba(30,30,40,.96) 70%,rgba(30,30,40,.99) 80%,#1e1e28 100%)",
              }}
            ></div>
          </div>

          <div style={{ position: "absolute", left: 0, top: 0, width: "100%" }}>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
