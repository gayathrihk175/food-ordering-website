import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  
 
  const {  name, costForTwo, avgRating, cloudinaryImageId,cuisines } = resData;

  return (
    <div className="m-4 p-4 w-[200px] shadow-lg rounded-md h-auto" >
        <img src={CDN_URL + cloudinaryImageId} alt="images" />
        <h4 className="font-serif text-xl" style={{padding:".5rem 0"}}>{name}</h4>
        <p className="font-serif" style={{padding:".5rem 0"}}>{cuisines[0]}</p>

        {/* <p className="font-serif" style={{padding:".5rem 0"}}>{cuisines.join(" , ")}</p> */}
        <p className="font-serif" style={{padding:".5rem 0"}}>{costForTwo}</p>
        <p className="font-serif" style={{padding:".5rem 0"}}>{avgRating}</p>
      
    </div>
  );
};

export default RestaurantCard;
