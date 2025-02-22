import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const Watchpage = () => {
  const [id] = useSearchParams();
  console.log(id.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  }, []);
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+id.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default Watchpage;
