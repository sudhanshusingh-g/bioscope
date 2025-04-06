import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import { CurrentUser } from "../api/user";

function AppLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // prevent premature rendering

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = async () => {
      try {
        const response = await CurrentUser();
        if (response.success) {
          setUser(response.data);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    loggedUser();
  }, [navigate]);

  if (loading) return null; // or add a spinner

  return user ? (
    <>
      <Header />
      <div>
        <Navigation />
        <Outlet context={user}/>
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default AppLayout;
