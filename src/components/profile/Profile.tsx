import React, { Dispatch, SetStateAction } from "react";
import { PROFILE } from "../utils";
// import Avatar from "react-avatar";
import profile from "../assets/profile1.jpeg";
import { Avatar, Progress } from "antd";
import { FaDownload, FaEllipsisV } from "react-icons/fa";
import resume from "../assets/resume.pdf";
interface ProfileProps {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}
const Profile = (props: ProfileProps) => {
  const { isNavOpen, setIsNavOpen } = props;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "Bhanu-Cheryala-Resume";
    link.href = resume;
    link.click();
  };
  return (
    <div className="profile-info max-h-screen relative transition duration-100 ease-in-out">
      <div
        className="profile-header px-4 text-center py-10 z-30"
        style={{
          background:
            "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
        }}
      >
        <div className=" absolute  right-6 top-8 md:hidden">
          <FaEllipsisV
            color="#8c8c8e"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          />
        </div>
        <div>
          <Avatar src={profile} size={120} />
        </div>
        <div className="text-white mt-2 font-Poppins tracking-wide text-lg cursor-pointer hover:text-app-yellow ">
          {PROFILE.NAME}
        </div>
        <div className="text-secondary text-base italic font-medium">
          {PROFILE.DESIGNATION}
        </div>
      </div>
      <div className="divide-y px-6 relative divide-secondary overflow-scroll max-h-[67vh]">
        {/* first section */}
        <div className="personal-details py-4">
          <div className="flex justify-between text-sm mt-2">
            <div className="text-white">City:</div>
            <div className="text-secondary">{PROFILE.ADDRESS.CITY}</div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <div className="text-white">State:</div>
            <div className="text-secondary"> {PROFILE.ADDRESS.STATE}</div>
          </div>
          <div className="flex justify-between text-sm my-2 ">
            <div className="text-white">Age:</div>
            <div className="text-secondary"> {PROFILE.AGE}</div>
          </div>
        </div>

        {/* second section */}
        <div className="py-6 relative flex flex-row justify-around">
          <div className="flex flex-col items-center">
            <Progress
              type="circle"
              percent={85}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-sm">
              {PROFILE.LANGUAGES[0]}
            </div>
          </div>
          <div className="flex flex-col justify-center justify-items-center align-middle">
            <Progress
              type="circle"
              percent={95}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-base">
              {PROFILE.LANGUAGES[1]}
            </div>
          </div>
          <div className="flex flex-col justify-center justify-items-center align-middle">
            <Progress
              type="circle"
              percent={75}
              size={"small"}
              strokeColor={"#ffc107"}
            />
            <div className="my-2 text-white text-sm">
              {PROFILE.LANGUAGES[2]}
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="py-6 relative overflow-scroll">
          {PROFILE.TECHSTACK?.map((item) => {
            return (
              <div className="flex flex-col my-2 mx-2">
                <div className="flex flex-row justify-between">
                  <div className="text-sm text-white">{item.name}</div>
                  <div className="text-sm text-white">{item.proficiency} %</div>
                </div>
                <Progress
                  percent={item.proficiency}
                  strokeColor={"#ffc107"}
                  strokeWidth={3}
                  showInfo={false}
                />
              </div>
            );
          })}
        </div>

        {/* fourth section */}
        <div
          className="flex flex-row  py-6 align-middle items-center cursor-pointer  justify-center"
          onClick={handleDownload}
        >
          <div className="text-sm text-secondary mr-3 tracking-wide capitalize font-semibold">
            DOWNLOAD RESUME
          </div>
          <FaDownload color="#54595f" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
