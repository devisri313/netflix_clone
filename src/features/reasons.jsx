import React from "react";
import { LuMonitorPlay } from "react-icons/lu";
import { MdOutlineCloudDownload } from "react-icons/md";
import { GiWatchtower } from "react-icons/gi";
import { RiStarSmileLine } from "react-icons/ri";

function Reasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      detail:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: <LuMonitorPlay />,
    },
    {
      title: "Download your shows to watch offline",
      detail: "Save your favourites easily and always have something to watch.",
      icon: <MdOutlineCloudDownload />,
    },
    {
      title: "Watch everywhere",
      detail:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <GiWatchtower />,
    },
    {
      title: "Create profiles for kids",
      detail:
        "Fun adventures with kids’ favourite characters — free with your membership.",
      icon: <RiStarSmileLine />,
    },
  ];

  return (
    <div className="mt-10">
      <div className="font-bold text-2xl mb-5 mt-8 text-white">
        More reasons to join
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="rounded-2xl p-8 h-80 bg-linear-to-b from-blue-950 to-gray-900 relative"
          >
            <div className="font-bold text-xl text-white">{reason.title}</div>

            <div className="py-4 text-gray-400 text-sm">{reason.detail}</div>

            <div className="text-5xl absolute bottom-5 right-5 opacity-50 text-white">
              {reason.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reasons;
