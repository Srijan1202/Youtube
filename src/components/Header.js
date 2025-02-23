  import img1 from "../utils/pngwing.com.png";
  import { useDispatch, useSelector } from "react-redux";
  import { toggleMenu } from "../utils/appSlice";
  import {  useEffect, useState } from "react";
  import {youtube_serch} from "../utils/constants";
  import { setSearchResults } from "../utils/serchresSlice";


  const Header = () => {
    const dispatch = useDispatch();

    const [serchvalue,setserchvalue]=useState("")
    const [serchres,setserchres]=useState([])


    const pastrest =useSelector((store)=>store.serchres.searchResults);
    
    useEffect(() => {

      if(pastrest[serchvalue]){
        setserchres(pastrest[serchvalue]);
        console.log("from store");
        return;
      }

    const timer = setTimeout(() => {serchfetch();}, 200);

      return () => {
        clearTimeout(timer);
      }
      

    }, [serchvalue]);

    const serchfetch= async()=>{
      const response = await fetch(youtube_serch+serchvalue);
      const data = await response.json();
      setserchres(data[1]);
      dispatch(setSearchResults({[serchvalue]:data[1]}));
    }

    const handleToggle = () => {
      dispatch(toggleMenu());
    };


    return (
      <div className="grid grid-flow-col p-1 px-4 col-span-12 justify-between items-center shadow-lg overflow-x-hidden">
        <div className="flex col-span-1" onClick={handleToggle}>
          <img
            className="h-6 hover:cursor-pointer"
            src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png"
            alt="sidebar"
          />
          <img
            className="h-6 ml-5"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube"
          />
        </div>
        <div className=" col-span-10 p-2 pl-80 ">
          <div>
          <input
            className="border-gray-300 border-2 p-1 rounded-l-full w-1/3"
            type="text"
            placeholder="Search"
            value={serchvalue}
            onChange={(e)=>setserchvalue(e.target.value)}
            
          />
          <button className="border-gray-300 border-l-0 rounded-r-full border-2 p-1">
            Search
          </button>
          </div>

          <div className="fixed bg-white w-[22.8%] rounded-lg shadow-xl p-2">  
            <ul>
              
              {serchres.map((item,index) => (<li key={index} className="p-1">🔍{item}</li>))}
              
            </ul>
          </div>
        </div>
        
        <div className="col-span-1">
          <img className="h-6" src={img1} alt="profile" />
        </div>
      </div>
    );
  };

  export default Header;
