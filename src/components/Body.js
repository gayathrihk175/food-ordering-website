import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

const [listOfRestaurant,setListOfRestaurant] = useState([]);
const [searchText,setSearchText] = useState([]);

useEffect(()=>{
  fetchData();
},[])


console.log("Body rendered")

const fetchData = async  () => {

  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );
  const res = await data.json();
  setListOfRestaurant(
    res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  console.log(res);

}


const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks like you are offline!</h1>


  return (listOfRestaurant.length === 0) ? <Shimmer/> : (
    <div className="body-container">
      <div className="flex sticky top-32 z-50">
        <div className="flex m-auto w-80 justify-between ">
          <input type="text" className="w-3/5 bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white font-serif" placeholder="Search..." value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          <button className="bg-orange-500 text-white rounded-md py-1 px-7 font-serif" onClick={()=>{
            console.log(searchText)
            const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setListOfRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="bg-orange-500 text-white rounded-lg py-2 px-4 m-auto block my-4 font-serif" onClick={() => {
          const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4)
          console.log(listOfRestaurant)
          setListOfRestaurant(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="relative top-[150px] grid grid-rows-3 grid-flow-col gap-4 w-3/4 mx-auto ">

              {listOfRestaurant.map((restaurant) => 
                (
                  <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}><RestaurantCard resData={...restaurant?.info} /></Link>
                )
              )}
      </div>
    </div>
  );
};

export default Body;
