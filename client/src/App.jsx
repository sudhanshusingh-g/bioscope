import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<Authentication />} />
      <Route path="/register" element={<Authentication />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
