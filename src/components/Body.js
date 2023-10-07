import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";

const Body = () => {
//   let listOfRestaurant = [  
//   {
//     data:{
//       id: "334477",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"4.1",
//     }
//   },
//   {
//     data:{
//       id: "334478",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"3.5",
//     }
//   },
//   {
//     data:{
//       id: "334479",
//       name: "Mc Donalds",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"5",
//     }
//   }
// ];


// const [listOfRestaurant,setListOfRestaurant] = useState( [  
//   {
//     data:{
//       id: "334477",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"4.1",
//     }
//   },
//   {
//     data:{
//       id: "334478",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"3.5",
//     }
//   },
//   {
//     data:{
//       id: "334479",
//       name: "Mc Donalds",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 70000,
//       deliveryTime: 36,
//       avgRating:"5",
//     }
//   }
// ]);

// const [listOfRestaurant,setListOfRestaurant] = useState(resList);


const [listOfRestaurant,setListOfRestaurant] = useState([]);


useEffect(()=>{
  // console.log("useEffect called")
  fetchData();
  // getRestaurants()
},[])

//the callback is called when the render cycle is done.

console.log("Body rendered")

const fetchData = async  () => {
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5??lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
  // const json = await data.json();
  // console.log(json)

  // setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info)

  const data = await fetch(
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );
  const res = await data.json();
  setListOfRestaurant(
    res.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
  );
  console.log(res);

}

// const fetchData = async () => {
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//   );

//   const json = await data.json();
//   const arrayOfCards = json.data.cards;
//   const restaurant_list = "restaurant_grid_listing";
  
//   for (const cardObj of arrayOfCards) {
//     if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
//       const resData =
//       cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
//       setListOfRestaurantnt(resData);
//       setFilteredRestaurant(resData);
//     }
//   }
// };

// const getRestaurants = async () => {
//   try {
//     const data = await fetch(
//       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");


//     const json = await data.json();


//     // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
//     async function checkJsonData(jsonData) {

//       for (let i = 0; i < jsonData?.data?.cards.length; i++) {

//         // initialize checkData for Swiggy Restaurant data
//         let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//         // if checkData is not undefined then return it
//         if (checkData !== undefined) {
//           return checkData;
//         }
//       }
//     }
//     // call the checkJsonData() function which return Swiggy Restaurant data
//     const resData = await checkJsonData(json);

//     // update the state variable restaurants with Swiggy API data
//     setListOfRestaurant(resData)
//   } catch (error) {
//     console.log(error);
//   }

// }


  return (
    <div className="body-container">
      {/* <div className="filter">
        <button onClick={() => {
          const filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4)
          console.log(listOfRestaurant)
          setListOfRestaurant(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div> */}
      <div className="restaurant-container">
        {/* Restaurant Card */}

        {/* <RestaurantCard resData={resObj} /> */}

        {/* <RestaurantCard resData={resList[0]} />
              <RestaurantCard resData={resList[1]} />
              <RestaurantCard resData={resList[2]} />
              <RestaurantCard resData={resList[3]} />
              <RestaurantCard resData={resList[4]} />
              <RestaurantCard resData={resList[5]} />
              <RestaurantCard resData={resList[6]} />
              <RestaurantCard resData={resList[7]} /> */}

        {/* {
                resList.map((restaurant) => <RestaurantCard resData={restaurant} key={restaurant.data.id}  />)
              } */}

              {listOfRestaurant.map((restaurant) => 
                (
                  <RestaurantCard resData={restaurant.info} key={restaurant.info.id} />
                )
              )}
      </div>
    </div>
  );
};

export default Body;
