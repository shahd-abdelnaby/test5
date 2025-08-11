import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/navbar/Navbar";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/contact";
import Footer from "./component/footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/layout/Layout";

let x = createBrowserRouter([
  {
    path: "", element: <Layout />,
    children: [
      {index:true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Portfolio", element: <Portfolio /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
