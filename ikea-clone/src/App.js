import "./App.css";
import ProductList from "./Pages/ProductList";
import Sofa1 from "./Pages/ProductList/Sofa/Sofa1";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/Signup/Signup";
import Cart from "./Pages/cart";
import Wishlist from "./Pages/wishlist";
// import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      
        {/* <Sofa1 />  */}
        {/* <Navbar /> */}
        {/* // <Signup />
        // <Login /> */}
        <Cart/>
        {/* <Wishlist/> */}
    </div>
  );
}

export default App;
