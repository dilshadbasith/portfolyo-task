import { useState } from "react";
import "./App.css";
import { myContext } from "./Context";
import Home from "./Home";

function App() {
  const [user,setUser]=useState([])
  return (
    <>
    <myContext.Provider value={{user,setUser}}>
    <Home/>
    </myContext.Provider>
    </>
  );
}

export default App;
