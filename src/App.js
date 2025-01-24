import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

//lazy loading
const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(()=>{
    const data = {
      name: "Rajat Arora",
    };
    setUserName(data.name);
  },[]);
  return (
    <Provider store={AppStore}>
    <UserContext.Provider value={{loggedInUser : userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path: '/',
        element: <Body />
      },
      {
        path : '/about',
        element : <About/>,
      },
      {
        path : '/contact',
        element : <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element : <ResMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading the store</h1>} ><Grocery/></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement : <Error />,
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
