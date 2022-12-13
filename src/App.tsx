import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import Billing from "./pages/Billing";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: true,
      offset: 220,
      // delay: 150,
      mirror: true,
      duration: 1000,
    });
  }, []);
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
