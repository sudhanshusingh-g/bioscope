// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { currentUser } from "../api/user";
// import { hideLoading, showLoading } from "../store/slices/loaderSlice";
// import SideNav from "../components/SideNav";
// import Header from "../components/Header";
// import {activeUser} from "../store/slices/userSlice";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Location from "../components/Location";
import Footer from "../components/Footer";


// function AppLayout() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loader } = useSelector((state) => state.loader);

//   useEffect(() => {
//     // Get current user
//     const getUser = async () => {
//       dispatch(showLoading());
//       try {
//         const response = await currentUser();
//         if (response) {
//           dispatch(activeUser(response.data));
//         } else {
//           localStorage.removeItem("token");
//           navigate("/login");
//         }
//       } catch (error) {
//         localStorage.removeItem("token");
//         navigate("/login");
//       } finally {
//         dispatch(hideLoading());
//       }
//     };
//     if (localStorage.getItem("token")) {
//       getUser();
//     } else {
//       navigate("/login");
//     }
//   }, []);

//   if (loader)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         Loading...
//       </div>
//     );

//   return (
//     <div className="max-w-[90%] mx-auto flex flex-col space-y-4 h-full">
//       <Header />
//       <div className="grid grid-cols-6 gap-4 h-full">
//         {/* <SideNav /> */}
//         <Outlet/>
//       </div>
//     </div>
//   );
// }

// export default AppLayout;

function AppLayout({ children }) {
 
  return (
    <div className="h-screen bg-gray-100">
      <header>
        <Logo
          source={"/bioscope-logo.png"}
          className="h-14 w-14 cursor-pointer"
        />

        <div className="w-[40%]">
          <Input
            type="search"
            placeholder="Search for movies"
            className="text-sm"
          />
        </div>
        <Location />
        <nav></nav>
      </header>
      <div className=" flex flex-col items-center justify-center font-lato">
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default AppLayout;
