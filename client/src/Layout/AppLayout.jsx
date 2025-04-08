import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { currentUser } from "../api/user";
import { hideLoading, showLoading } from "../store/slices/loaderSlice";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import {activeUser} from "../store/slices/userSlice";

function AppLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.loader);



  useEffect(() => {
    // Get current user
    const getUser = async () => {
      dispatch(showLoading());
      try {
        const response = await currentUser();
        if (response) {
          dispatch(activeUser(response.data));
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        dispatch(hideLoading());
      }
    };
    if (localStorage.getItem("token")) {
      getUser();
    } else {
      navigate("/login");
    }
  }, []);

  if (loader)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <>
      <Header />
      <div>
        <SideNav />
        <Outlet/>
      </div>
    </>
  );
}

export default AppLayout;
