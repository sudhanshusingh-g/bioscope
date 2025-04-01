import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

function AppLayout() {
  const userLoggedIn = false;
  return (
    <>
      {userLoggedIn ? (
        <section className="">
          <Header />
          <div>
            <Navigation/>
            <Outlet />
          </div>
        </section>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}

export default AppLayout;
