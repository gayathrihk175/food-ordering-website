import { useEffect, useState } from "react";
// import { menu_api_url } from "./constants";
import {swiggy_menu_api_URL } from "../utils/constants"


const useRestaurantMenu = (resId) => {
  //fetchData

  const { resInfo, setResInfo } = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;

};

export default useRestaurantMenu;
