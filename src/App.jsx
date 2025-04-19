import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import CityViewPage from "./pages/CityViewPage/CityViewPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="city" element={<CityViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
