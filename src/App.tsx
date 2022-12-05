import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./test";
import Layouts from "./components/Layouts";

function App() {
    return (
        <BrowserRouter>
            <Layouts.Default>
                <Routes>
                    {/*<Route path="/" element={<Test />} />*/}
                    <Route path='/billing' element={<Test/>}/>
                </Routes>
            </Layouts.Default>
        </BrowserRouter>
    );
}

export default App;
