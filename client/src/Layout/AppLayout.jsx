// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { currentUser } from "../api/user";
// import { hideLoading, showLoading } from "../store/slices/loaderSlice";
// import SideNav from "../components/SideNav";
// import Header from "../components/Header";
// import {activeUser} from "../store/slices/userSlice";

import { Link } from "react-router-dom";

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
      <div className=" flex flex-col items-center justify-center font-lato">
        {children}
      </div>
      <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-gray-400">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
                {/* Add more sitemap links as needed */}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">User Access</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/admin/login" className="hover:text-gray-400">
                    Admin Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-gray-400">
                    User Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-gray-400">
                    User Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Partner Access</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/partner/register" className="hover:text-gray-400">
                    Partner Register
                  </Link>
                </li>
                <li>
                  <Link to="/partner/login" className="hover:text-gray-400">
                    Partner Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm">123 Main Street, Anytown, India</p>
              <p className="text-sm">Email: info@example.com</p>
              <p className="text-sm">Phone: +91 9876543210</p>
              {/* Add more contact information */}
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 py-4 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Bioscope. All rights reserved.
            </p>
            <p className="text-gray-400">Created by Sudhanshu Singh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
