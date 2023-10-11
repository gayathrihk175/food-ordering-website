// External script file:- (JS)
// let headingTag = document.createElement("h1")
// let container = document.getElementById("root")
// headingTag.innerText = "Hello World !"
// container.append(headingTag)

// External script file:- (React)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// ); //3 arguments
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading); //return you an object and not a tag, as we are creating a React element at the end of the day.

/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// console.log(parent); //Object

//Although React is creating and element (supposedly) it is infact creating an Object which is the converted into an element while rendering on to the UI.

/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>
*/

// Nested Structures
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// console.log(parent); //Object

/*
<div id="parent">
    <div id="child1">
        <h1>I am an h1 tag of child1</h1>
        <h2>I am an h2 tag of child1</h2>
    </div>
    <div id="child2">
        <h1>I am an h1 tag of child2</h1>
        <h2>I am an h2 tag of child2</h2>
    </div>
</div>
*/

// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//       React.createElement("div", { id: "child1" }, [
//           React.createElement("h1", {}, "I am an h1 tag of child1"),
//           React.createElement("h2", {}, "I am an h2 tag of child1"),
//         ]),
//         React.createElement("div", { id: "child2" }, [
//           React.createElement("h1", {}, "I am an h1 tag of child2"),
//           React.createElement("h2", {}, "I am an h2 tag of child2"),
//         ])
//     ]
//   );
      
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(parent);
      
//   console.log(parent); //Object
  
//   //But imagine you have a more complex structure, then its going to be hard and hence we use JSX.
  

// import React from "react";
// import ReactDOM from "react-dom/client";


//React.createElement ==> ReactElement - JS Object ==> HTMLElement(on render)

//when we createElement its an object.Its only after rendering using ReactDOM that it becomes an element
// const heading = React.createElement("h1",{id:"headingTag"},"Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// console.log(heading);


//This is a clumsy way of writing which isnt developer friendly and it also becomes complex. Hence, JSX.
// JSX is a js syntax which is easier to create React elements. JSX is not a part of React.We can write REact without JSX. JSX makes a developers life easier.
// JSX is a convention where we merge js nd html.
// JSX with this we can write js nd html in a single file.

//JSX is not html is js but its an html like syntax

// JSX =>Babel transpiles to React.createElement => ReactElement - JS Object => HTMLElement(on render)
// const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;
// //The abv is not a valid JS/pure js.
// // JSX is an element
// console.log(jsxHeading,"from JSX");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading)

// Babel is converting JSX to React.createElement and then React is able to under it and render it to the UI.

/*
React Components:- Class based & Functional components.
*/

// React Functional Component - just a normal JS function that returns JSX.

// const HeadingComponent = () => {
//     return <h1>Namaste React</h1>
// }

// const HeadingComponent2 = () => {
//      <h1>Namaste React</h1>
// }

// const HeadingComponent3 = () => (
//      <h1>Namaste React</h1>
// )

//If you only have a single line of code, you can also write.This is called as shorthand syntax.


// const fn1 = () => {
//    return true;
// }

//Same as above:-

// const fn2 = () => true;
// const number = 1000;
// const HeadingComponent3 = () => (
//         <div id="container">
//             {number}
//             {title}
//             <h1>Namaste React Functional Component</h1>
//             <Title/>
//         </div>
// )

// const title =  (
//     <h1>A title</h1>
// )

// console.log(title)

// const Title = () => {
//    return  <>
//     <h1>This is the heading 2</h1>
//     <h2>This is a sub-heading</h2>
//    </>
// }

// const Title2 = () => (
    
//      <>
//     <h1>This is the heading 2</h1>
//     <h2>This is a sub-heading</h2>
//  </>
 
//  )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent3/>)
// root.render(<Title/>)

//Whats component composition ? Composing components into another component

// {} u can write js logic using {} inside a component.



// ---------------------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";

// const elem = <span>by Akshay Saini</span>

// const data = api.getData();

//What if this api sends some malicious data.And this will be executed in our program.
//This type of attack is cross-site attack
//However, JSX takes care of these injection attacks and escapes it.
//{data} will sanitize and prevent cross-site scripting attack.

// const Title = () => {
//     return(
//         <h3>This is a frontend course</h3>
//     )
// }


// const HeadingComponent = () => {
//     return(
//         <>
//             <h1>Namaste React - {elem}</h1>
//             <Title/>   
//             {Title()}
//             <Title></Title>
//         </> 
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);


// <Title/> can be written as <Title></Title>. There wont be any change in html structure and it can be repeated numerous times.


// ---------------------------------------------------------------------

/*
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
* - RestaurantCard 
    * - img
    * - name os res
    * - star rating
    * - cuisine
    * - delivery time
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

import "../App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


// const styleCard = {
//     backgroundColor : "#f0f0f0",
// }

// const RestaurantCard = (props) => {
//     console.log(props)
//     return (
//         <div className="restaurant-card" style={styleCard}>
//             <img className="restaurant-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" alt="Meghana Foods" />
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const RestaurantCard = (props) => {
//     const {resName,cuisine} = props;
//     return (
//         <div className="restaurant-card" style={styleCard}>
//             <img className="restaurant-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" alt="Meghana Foods" />
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const RestaurantCard = ({resName,cuisine}) => {
//     // console.log(props)
//     return (
//         <div className="restaurant-card" style={styleCard}>
//             <img className="restaurant-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf" alt="Meghana Foods" />
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const RestaurantCard = (props) => {
//     // console.log(props)
//     const { resData } = props;
//     return (
//         <div className="restaurant-card" style={styleCard}>
//             <img className="restaurant-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.data.cloudinaryImageId} alt="Meghana Foods" />
//             <h3>{resData.data.name}</h3>
//             <h4>{resData.data.cuisines.join(" , ")}</h4>
//             <h4>{resData.data.totalRatingsString} stars</h4>
//             <h4>₹{resData.data.costForTwo/100}</h4>
//             <h4>{resData.data.deliveryTime} minutes</h4>

//         </div>
//     )
// }

// const resObj = {
//         type: "restaurant",
//         data: {
//           type: "F",
//           id: "334475",
//           name: "KFC",
//           uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
//           city: "1",
//           area: "BTM Layout",
//           totalRatingsString: "500+ ratings",
//           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//           tags: [],
//           costForTwo: 40000,
//           costForTwoString: "₹400 FOR TWO",
//           deliveryTime: 36,
//           minDeliveryTime: 36,
//           maxDeliveryTime: 36,
//           slaString: "36 MINS",
//           lastMileTravel: 3.5,
//           slugs: {
//             restaurant: "kfc-btm-layout-btm",
//             city: "bangalore",
//           },
//           cityState: "1",
//           address:
//             "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
//           locality: "2nd Stage",
//           parentId: 547,
//           unserviceable: false,
//           veg: false,
//           select: false,
//           favorite: false,
//           tradeCampaignHeaders: [],
//           aggregatedDiscountInfo: {
//             header: "FREE DELIVERY",
//             shortDescriptionList: [
//               {
//                 meta: "FREE DELIVERY",
//                 discountType: "FREE_DELIVERY",
//                 operationType: "RESTAURANT",
//               },
//             ],
//             descriptionList: [
//               {
//                 meta: "FREE DELIVERY",
//                 discountType: "FREE_DELIVERY",
//                 operationType: "RESTAURANT",
//               },
//             ],
//             subHeader: "",
//             headerType: 0,
//             superFreedel: "",
//           },
//           aggregatedDiscountInfoV2: {
//             header: "",
//             shortDescriptionList: [
//               {
//                 meta: "Free Delivery",
//                 discountType: "FREE_DELIVERY",
//                 operationType: "RESTAURANT",
//               },
//             ],
//             descriptionList: [
//               {
//                 meta: "FREE DELIVERY",
//                 discountType: "FREE_DELIVERY",
//                 operationType: "RESTAURANT",
//               },
//             ],
//             subHeader: "",
//             headerType: 0,
//             superFreedel: "",
//           },
//           ribbon: [
//             {
//               type: "PROMOTED",
//             },
//           ],
//           chain: [],
//           feeDetails: {
//             fees: [],
//             totalFees: 0,
//             message: "",
//             title: "",
//             amount: "",
//             icon: "",
//           },
//           availability: {
//             opened: true,
//             nextOpenMessage: "",
//             nextCloseMessage: "",
//           },
//           longDistanceEnabled: 0,
//           rainMode: "NONE",
//           thirdPartyAddress: false,
//           thirdPartyVendor: "",
//           adTrackingID: "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
//           badges: {
//             imageBased: [],
//             textBased: [],
//             textExtendedBadges: [],
//           },
//           lastMileTravelString: "3.5 kms",
//           hasSurge: false,
//           sla: {
//             restaurantId: "334475",
//             deliveryTime: 36,
//             minDeliveryTime: 36,
//             maxDeliveryTime: 36,
//             lastMileTravel: 3.5,
//             lastMileDistance: 0,
//             serviceability: "SERVICEABLE",
//             rainMode: "NONE",
//             longDistance: "NOT_LONG_DISTANCE",
//             preferentialService: false,
//             iconType: "EMPTY",
//           },
//           promoted: true,
//           avgRating: "3.8",
//           totalRatings: 500,
//           new: false,
//         },
//         subtype: "basic",
// }
      


// const Body = () => {
//     return(
//         <div className="body-container">
//             <div className="search">Search</div>
//             <div className="restaurant-container">
//                 {/* Restaurant Card */}
//                 <RestaurantCard resName="Meghana Foods" cuisine="Biryani,North Indian" />
//                 <RestaurantCard resName="KFC" cuisine="Fried Chicken, Fast Food" />
//             </div>
//         </div>
//     )
// }




const AppLayout = () => {

    return (
        <div className="App">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement : <ErrorPage />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />,
            }
        ],
        // errorElement: <AppLayout outlet={<ErrorPage />} />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
