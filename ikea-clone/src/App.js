import "./App.css";
import ProductList from "./Pages/ProductList";
import Sofa1 from "./Pages/ProductList/Sofa/Sofa1";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
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
    </div>
  );
}

export default App;
