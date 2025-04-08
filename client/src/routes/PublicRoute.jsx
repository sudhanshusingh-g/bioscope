import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet/>;
}

export default PublicRoute;
