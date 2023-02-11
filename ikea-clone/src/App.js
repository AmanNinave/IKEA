import "./App.css";
import ProductList from "./Pages/ProductList";
import Sofa1 from "./Pages/ProductList/Sofa/Sofa1";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
<<<<<<< HEAD
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      {
        /* <Sofa1 /> */
        <>
          <Navbar />
          <Home />
        </>
        // <Signup />
        // <Login />
      }
=======
import Cart from "./Pages/cart";
import Wishlist from "./Pages/wishlist"

function App() {
  return (
    <div className="App">
        <Navbar />
       <Sofa1 /> 
        {/* <Signup />
        <Login /> */}
      <Cart/>
      {/* <Wishlist/> */}
>>>>>>> 32d2f6b8f66383353fd25022be376ad3336f78da
    </div>
  );
}

export default App;
