
import "../App.css";
import React , {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import Cart from "./components/Cart";
    
const Grocery = lazy(() => 
 import("./components/Grocery")
);



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
                path:"/grocery",
                element:(<Suspense fallback={<h1>Grocery loading...</h1>}><Grocery /></Suspense>),
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />,
            },
            {
                path:"/cart",
                element:<Cart />,
            }
           
        ],
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
