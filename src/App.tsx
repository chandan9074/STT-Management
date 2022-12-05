import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./test";
import Layouts from "./components/Layouts";

function App() {
  return (
<<<<<<< HEAD
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    </div>
=======
    <BrowserRouter>
      <Layouts.Default>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Layouts.Default>
    </BrowserRouter>
>>>>>>> master
  );
}

export default App;
