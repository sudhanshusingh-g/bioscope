import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Authentication from "./pages/Authentication";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import AppLayout from "./Layout/AppLayout";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<PublicRoute/>}>
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Authentication />} />
      </Route>
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
