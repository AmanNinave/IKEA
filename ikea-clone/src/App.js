import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Allroutes from "./Pages/Routes/Allroutes";
import { MainFooter } from "./Components/Footer/MainFooter";
import Wishlist from "./Pages/wishlist";

function App() {
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
