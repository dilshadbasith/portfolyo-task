import "./App.css";
import Settings from "./Components/Settings";
import '../src/css/colors.css'
import '../src/css/plugins.css'
import '../src/css/style.css'
import Topbar from "./Components/Topbar";
import Mobilemenu from "./Components/Mobilemenu";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      {/* preloader  	 */}
      {/* <div id="preloader">
        <div className="loader_line"></div>
      </div> */}
      {/* preloader */}
      {/* Wrapper All */}
      <div class="ryker_tm_all_wrap" data-magic-cursor="show" data-color="brown"> 
      <Settings/>
      <Topbar/>
      <Mobilemenu/>
      <Hero/>
      </div>
      {/* Wrapper All */}
    </div>
  );
}

export default App;
