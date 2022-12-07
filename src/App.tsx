import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layouts from "./components/Layouts";
import Billing from "./pages/Billing";

function App() {

  return (
    <BrowserRouter>
      <Layouts.Default>
        <Routes>
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </Layouts.Default>
    </BrowserRouter>
  );
}

export default App;
