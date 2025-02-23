import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";

const Watchpage = () => {
  const [id] = useSearchParams();
  console.log(id.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());

  }, []);
  return (
    <div className="flex flex-col m-5 p-2">
    <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+id.get("v")+"?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
    </div>
    <div className="flex flex-col m-2 p-2">
      <Commentcontainer/>
    </div>
    </div>
  );
};

export default Watchpage;
