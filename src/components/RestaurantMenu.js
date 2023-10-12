// import React from "react";
// import Shimmer from "./Shimmer";
// import { CDN_URL } from "../utils/constants";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// // import { menu_api_url } from "../utils/constants";


// const RestaurantMenu = () => {
//   // const [resInfo, setResInfo] = useState(null)
//   const { resId } = useParams();
//   const resInfo = useRestaurantMenu(resId);

//   // const params = useParams()
//   // console.log(params)
//   if (resInfo === null) return <Shimmer />;

//   const {itemCards}  =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {} ;
//   // .itemCards[0].card.info
//   console.log(itemCards, "itemcards");

//   return (
//     <div className="menu">
//       <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
//       <img
//         src={CDN_URL + resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId}
//         alt=""
//       />
//       <p>
//         {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")} -{" "}
//         {resInfo?.cards[0]?.card?.card?.info?.costForTwo / 100}
//       </p>
//       <ul>
      
//         {itemCards.map((item) => (
//           <li key={item?.card?.info?.id}>
//             {item?.card?.info?.name } - &#8377;{item?.card?.info?.price }
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

import React from 'react'
import { useEffect,useState } from 'react'
import Shimmer from './Shimmer'
import { CDN_URL } from "../utils/constants";
import { useParams } from 'react-router-dom';
import {menu_api_url} from "../utils/constants"

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams();
    // const params = useParams()
    // console.log(params)

  useEffect(() => {
    fetchMenu();
  },[])

  const fetchMenu = async () => {
    const data = await fetch(menu_api_url+resId)
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  }

  if(resInfo === null ) return <Shimmer/>
  const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // .itemCards[0].card.info
  console.log(itemCards)

  return  (
    <div className='menu'>
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <img src={CDN_URL +resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="" />
      <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" , ")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwo/100}</p>
      <ul>
        {
          itemCards.map((item)=> (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - &#8377;{item?.card?.info?.price/100}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default RestaurantMenu
