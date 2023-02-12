import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Allroutes from "./Pages/Routes/Allroutes";
import { MainFooter } from "./Components/Footer/MainFooter";
import Wishlist from "./Pages/wishlist";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { json } from "react-router-dom";
import Payment from "./Pages/Payment/Payment";

function App() {

 const storeData =  useSelector((dta)=> {
        return dta;
  })

  
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <MainFooter/>
      {/* <Wishlist/> */}
     
      
    </div>
  );
}

export default App;
