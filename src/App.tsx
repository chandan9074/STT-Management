import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./test";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
