import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";
import Livechat from "./Livechat";

const Watchpage = () => {
  const [id] = useSearchParams();
  console.log(id.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  }, []);
  return (
    <div className="flex flex-col w-full ">
      <div className="flex px-5 w-full ">
        <div className="m-1">
          <iframe
            width="1100"
            height="600"
            src={
              "https://www.youtube.com/embed/" +
              id.get("v") +
              "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="border-2 border-black rounded-lg w-full m-1 ">
          <Livechat />
        </div>
      </div>
      <div className="flex flex-col m-2 p-2">
        <Commentcontainer />
      </div>
    </div>
  );
};

export default Watchpage;
