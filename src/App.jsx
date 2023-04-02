import './App.css';
import Sidebar from "./sidebar-section";
import ContainerAdmin from "./container-admin";
import React from "react";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <ContainerAdmin/>
    </div>
  );
}

export default App;
