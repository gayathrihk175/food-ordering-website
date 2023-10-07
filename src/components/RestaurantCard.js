import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  // console.log(props)
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  // const { resData } = props;
  // const {name,cuisines,avgRatingString,costForTwo,cloudinaryImageId} = resData?.data
  const {  name, costForTwo, avgRating, cloudinaryImageId,cuisines } = resData;

  return (
    <div className="restaurant-card" style={styleCard} >
    
      {/* <img className="restaurant-image" src={CDN_URL+ cloudinaryImageId} alt="Meghana Foods" />
          <h3>{name}</h3>
          <h4>{cuisines.join(" , ")}</h4>
          <h4>{avgRatingString} stars</h4>
          <h4>₹{costForTwo/100}</h4> */}
      
        <img src={CDN_URL + cloudinaryImageId} alt="images" />
        <h4 style={{padding:".5rem 0"}}>{name}</h4>
        <p style={{padding:".5rem 0"}}>{cuisines.join(" , ")}</p>
        <p style={{padding:".5rem 0"}}>{costForTwo}</p>
        <p style={{padding:".5rem 0"}}>{avgRating}</p>
      
    </div>
  );
};

export default RestaurantCard;
