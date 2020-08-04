import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Grid from "./Components/Grid";
function App() {
        return (
                <div className="App">
                        <Navbar />
                        <div id="main">
                                <Grid />
                        </div>
                </div>
        );
}

export default App;
