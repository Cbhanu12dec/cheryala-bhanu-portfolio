import React from "react";
import mainimg from "../assets/back-img.jpeg";
import { PROFILE } from "../utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Button } from "antd";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Lottie from "lottie-react";
import bannerani from "../assets/banner-ani.json";
import resume from "../assets/resume.pdf";
// import Typed from "react-typed";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Content() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Bhanu-Cheryala-Resume";
    link.href = resume;
    link.click();
  };
  return (
    <div className="min-h-full flex justify-center flex-col">
      <div className="w-full flex flex-col items-center relative mt-6 md:mt-10">
        <div
          className="bg-banner-bg h-40 mt-10 w-10/12 absolute -top-4 md:-top-8"
          style={{ boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)" }}
        ></div>
        <div
          className="mt-10 w-11/12"
          style={{
            backgroundImage: `url(${mainimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            zIndex: 10,
            height: "20rem",
          }}
        >
          <div
            className="h-full relative flex flex-row md:flex-col-reverse items-end px-2 md:px-16"
            style={{
              backgroundImage:
                "linear-gradient(90deg,rgba(45,45,58,.9) 15%,rgba(45,45,58,.7) 50%,rgba(43,43,53,.7) 100%)",
            }}
          >
            <div className="absolute top-14 md:left-8 mx-6 md:mx-12">
              <div className="text-sm md:text-lg text-white font-Poppins tracking-wider">
                Hello, It's Me
              </div>
              <div className="text-2xl md:text-5xl text-white font-Poppins font-bold tracking-wider my-1 md:my-2">
                Bhanu Cheryala
              </div>
              <div className="my-2 md:my-4 text-xs md:text-base">
                <span className="text-white">{`<`}</span>
                <span className="text-app-yellow">code</span>
                <span className="text-white">{`>`}</span>
                <span className="text-white tracking-wider font-medium text-xs md:text-lg">
                  I'm a Full Stack Developer...!
                  {/* <Typed
                    strings={[
                      "I'm a Student...!",
                      "I'm a Full Stack Developer...!",
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                  /> */}
                </span>
                <span className="text-white">{`<`}</span>
                <span className="text-app-yellow">code</span>
                <span className="text-white">{`/>`}</span>
              </div>
              <Button
                size={"large"}
                style={{
                  background: "#ffc107",
                  color: "#000",
                  borderRadius: 0,
                  height: 40,
                  outline: "none",
                  border: "none",
                  letterSpacing: 1.0,
                  fontWeight: 600,
                  fontSize: "12px",
                  marginTop: "24px",
                }}
                onClick={handleDownload}
              >
                DOWNLOAD RESUME
              </Button>
            </div>
            <div className="hidden md:block md:mr-20">
              <Lottie animationData={bannerani} size={10} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="my-6 md:my-6 flex flex-row mx-0 md:mx-6">
        {PROFILE.MAINBANNER?.map((item) => {
          return (
            <div className="stats-banner-item flex flex-row align-middle items-center mx-8 md:mx-8 tracking-wider">
              <div className="text-2xl text-app-yellow font-semibold">
                {item.COUNT}
              </div>
              <div className="text-base text-white mx-2">{item.NAME}</div>
            </div>
          );
        })}
      </div>

      {/*  Experiance and Education */}
      <div className="app-history flex flex-col md:flex-row mx-8 md:mx-16 py-6 md:py-10">
        <div className="app-eductaion  basis-1/2 flex flex-col">
          <div className="text-xl text-app-yellow tracking-wider font-medium font-Poppins">
            Education
          </div>
          <div className="overflow-scroll -mx-6 mt-2">
            <VerticalTimeline lineColor="#191923" layout="1-column-right">
              {PROFILE.EDUCATION?.map((item) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background:
                        "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
                      color: "#fff",
                    }}
                    contentArrowStyle={{
                      borderLeft: "10px solid  rgba(43,43,53,.98)",
                    }}
                    position="left"
                    iconStyle={{
                      background: "#ffc107",
                      borderColor: "blue",
                      height: "10px",
                      width: "10px",
                      marginRight: "16px",
                      marginTop: "18px",
                    }}
                  >
                    <div className="w-full flex flex-col md:flex-row justify-between md:items-center px-2 md:px-6 mt-2">
                      <div className="text-base font-Poppins tracking-wider">
                        {item.NAME}
                      </div>
                      <div className="bg-app-terinary-color p-3 text-xs rounded-full text-duration my-2 md:my-0">
                        {item.DURATION}
                      </div>
                    </div>
                    <div className="text-sm text-duration px-2 md:px-6 italic tracking-wider font-medium">
                      {item.ROLE}
                    </div>
                    <div className="text-duration mt-6 px-2 md:px-6 text-sm">
                      {item.INFO}
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
        <div className="app-eductaion md:basis-1/2 flex flex-col">
          <div className="text-xl text-app-yellow tracking-wider font-medium font-Poppins ml-6">
            Work History
          </div>
          <div className="overflow-scroll">
            <VerticalTimeline lineColor="#191923" layout="1-column-right">
              {PROFILE.EXPERIANCE?.map((item) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background:
                        "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
                      color: "#fff",
                      border: "none",
                    }}
                    contentArrowStyle={{
                      borderLeft: "10px solid  rgba(43,43,53,.98)",
                    }}
                    position="left"
                    iconStyle={{
                      background: "#ffc107",
                      height: "10px",
                      width: "10px",
                      marginRight: "15px",
                      marginTop: "18px",
                    }}
                  >
                    <div className="w-full flex flex-col md:flex-row justify-between md:items-center px-2 md:px-6 mt-2">
                      <div className="text-base font-Poppins tracking-wider">
                        {item.NAME}
                      </div>
                      <div className="bg-app-terinary-color p-3 text-xs rounded-full text-duration my-2 md:my-0">
                        {item.DURATION}
                      </div>
                    </div>
                    <div className="text-sm text-duration  px-2 md:px-6 italic tracking-wider font-medium">
                      {item.ROLE}
                    </div>
                    <div className="text-duration mt-6  px-2 md:px-6  text-sm">
                      {item.INFO}
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="app-projects mx-4 md:mx-16 mb-10">
        <div className="text-xl text-app-yellow tracking-wider font-medium font-Poppins">
          Projects
        </div>

        {PROFILE.PROJECTS?.map((item) => {
          return (
            <div
              className="app-card px-4 md:px-6 py-2 md:py-3 w-full md:w-1/3 rounded mt-6"
              style={{
                background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
                boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="title text-white text-base tracking-wider font-medium">
                  {item.NAME}
                </div>
                <div className="bg-app-terinary-color p-3 text-xs rounded-full text-duration max-w-max my-4">
                  {item.DURATION}
                </div>
              </div>

              <div className="my-4 text-duration text-sm">{item.SHORTDESC}</div>
              <div className="text-app-yellow cursor-pointer mb-4 text-sm">
                VIEW MORE
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Information */}
      <div className="contact-section flex flex-col mx-4 md:mx-16">
        <div className="text-xl text-app-yellow tracking-wider font-medium font-Poppins mt-4">
          Contact information
        </div>

        <div className="contact-details grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-8">
          <div
            className="py-4 md:py-6 rounded"
            style={{
              background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <div className="flex px-5 md:px-10 py-2">
              <div className="text-white text-sm">Name:</div>
              <div className="text-sm	 text-duration mx-6"> {PROFILE.NAME}</div>
            </div>
            <div className="flex px-5 md:px-10 py-2">
              <div className="text-white text-sm">Email:</div>
              <div className="text-sm text-duration mx-6"> {PROFILE.EMAIL}</div>
            </div>
            <div className="flex px-5 md:px-10 py-2">
              <div className="text-white text-sm">University Mail:</div>
              <div className="text-sm text-duration mx-6">
                {" "}
                {PROFILE.CLGMAIL}
              </div>
            </div>
          </div>
          <div
            className="py-4 md:py-6 rounded"
            style={{
              background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <div className="flex px-5 md:px-10 py-2">
              <div className="text-white text-sm">Street:</div>
              <div className="text-sm text-duration mx-6">
                {" "}
                {PROFILE.ADDRESS.STREET}
              </div>
            </div>
            <div className="flex px-5 md:px-10 py-2">
              <div className="text-white text-sm">City:</div>
              <div className="text-sm text-duration mx-6">
                {" "}
                {PROFILE.ADDRESS.CITY}
              </div>
            </div>
            <div className="flex px-5 md:px-10 py-2">
              <div className="text-white text-sm">State:</div>
              <div className="text-sm text-duration mx-6">
                {" "}
                {PROFILE.ADDRESS.STATE}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-mail-section mt-6 mx-1">
          <div className="text-base text-white tracking-wider font-semibold">
            Get in touch
          </div>

          <div
            className="my-6 px-6 md:px-10 py-6 md:py-10"
            style={{
              background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
              boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
            }}
          >
            <div className="relative mb-6 w-11/12 rounded">
              <div className="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none bg-app-terinary-color">
                <BsFillPersonFill
                  color="#8c8c8e"
                  height={40}
                  width={40}
                  fontSize={"18px"}
                />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="text-gray-900 text-sm md:text-lg focus:outline-none  block w-full md:pl-10 p-4 text-white ml-4 md:ml-10 "
                placeholder="Name"
                style={{
                  background: "linear-gradient(159deg,#252532 0%,#23232d 100%)",
                }}
              />
            </div>

            <div className="relative mb-6 w-11/12 rounded-md">
              <div className="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none bg-app-terinary-color">
                <MdAlternateEmail
                  color="#8c8c8e"
                  height={28}
                  width={28}
                  fontSize={"18px"}
                />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="text-gray-900 text-sm md:text-lg focus:outline-none  block w-full md:pl-10 p-4 text-white ml-4 md:ml-10 "
                placeholder="Email"
                style={{
                  background: "linear-gradient(159deg,#252532 0%,#23232d 100%)",
                }}
              />
            </div>
            <div className="relative mb-6 w-11/12 rounded-md">
              <div className="absolute inset-y-0 left-0  flex items-center px-4 pointer-events-none bg-app-terinary-color">
                <MdEmail
                  color="#8c8c8e"
                  height={40}
                  width={40}
                  fontSize={"18px"}
                />
              </div>
              <textarea
                id="input-group-1"
                className="text-gray-900 text-lg focus:outline-none  block w-full pl-10 p-4 text-white ml-4 md:ml-10 "
                placeholder="Message"
                rows={4}
                style={{
                  background: "linear-gradient(159deg,#252532 0%,#23232d 100%)",
                }}
              />
            </div>
            <Button
              size={"large"}
              style={{
                background: "#ffc107",
                color: "#000",
                borderRadius: 0,
                height: 40,
                outline: "none",
                border: "none",
                fontSize: "12px",
                letterSpacing: 1.5,
                fontWeight: 500,
              }}
            >
              SEND MESSAGE
            </Button>
          </div>
        </div>

        <div
          className="py-4 px-10 mb-6 mt-10 flex flex-row items-center"
          style={{
            background: "linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)",
            boxShadow: "0 3px 8px 0 rgba(15,15,20,.2)",
          }}
        >
          <AiOutlineCopyrightCircle color="#8c8c8e" />
          <div className="text-duration ml-2 text-sm">
            All Rights reserved by bhanu cheryala
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
