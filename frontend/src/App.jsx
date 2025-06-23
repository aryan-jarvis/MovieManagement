import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ListMovie from "./pages/ListMovie";
import ListShow from "./pages/ListShow";
import ListTheatre from "./pages/ListTheatre";
import AuthPopUp from "./pages/AuthPopUp";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/listM" element={<ListMovie />} />
        <Route path="/listS" element={<ListShow />} />
        <Route path="/listT" element={<ListTheatre />} />
        <Route path="/authP" element={<AuthPopUp />} />
      </Routes>
    </div>
  );
}
