import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Protected from "./routes/Protected";
import UserHome from "./pages/User/Home";
import AdminHome from "./pages/admin/Home";
import PartnerHome from "./pages/partner/Home";
import UserLayout from "./layout/User/UserLayout";
import AdminLayout from "./layout/admin/AdminLayout";
import PartnerLayout from "./layout/partner/PartnerLayout";
import AppLayout from "./Layout/AppLayout";

function App() {
  return (
    <AppLayout>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Authentication />} />
        <Route path="/partner/login" element={<Authentication />} />
        <Route path="/register" element={<Authentication />} />
        <Route path="/partner/register" element={<Authentication />} />
        <Route path="/admin/login" element={<Authentication />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* User routes*/}
        <Route element={<Protected allowedRoles={["user"]} />}>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<UserHome />} />
          </Route>
        </Route>
        {/* Admin */}
        <Route element={<Protected allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
          </Route>
        </Route>
        {/* Partner */}
        <Route element={<Protected allowedRoles={["partner"]} />}>
          <Route path="/partner" element={<PartnerLayout />}>
            <Route index element={<PartnerHome />} />
          </Route>
        </Route>

        {/* Catch all */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
