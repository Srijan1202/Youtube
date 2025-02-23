import { use, useEffect } from "react";
import { youtube } from "../utils/constants";
import { useState } from "react";
import Videocards from "./Videocards";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Videos = () => {
  const [video, setVideo] = useState([]);

  const open = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const response = await fetch(youtube);
    const data = await response.json();
    setVideo(data.items);
  };

  if (!open) return (
    <div className="flex flex-wrap w-[100vw] justify-evenly ">
      {video.map((item) => (
        <Link key={item.id} to={"/watch?v="+item.id}><Videocards info={item} /></Link>
      ))}
    </div>
  );
  
  return (
    <div className="flex flex-wrap w-[90vw] justify-evenly ">
      {video.map((item) => (
        <Link key={item.id} to={"/watch?v="+item.id}><Videocards info={item} /></Link>
      ))}
    </div>
  );
};

export default Videos;
