import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar/Navbar";
import Allroutes from "./Pages/Routes/Allroutes";
import { MainFooter } from "./Components/Footer/MainFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <MainFooter/>
    </div>
  );
}

export default App;
