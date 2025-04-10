import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Logo from "../components/Logo";
import { ToastContainer,toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Authentication() {


  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const currentEndpoint=pathSegments[pathSegments.length-1];
  console.log(currentEndpoint);
  const roleFromPath=pathSegments.includes("partner") ?
          "partner" : pathSegments.includes("admin") ? "admin":"user"
  const navigate=useNavigate();

  useEffect(()=>{
    if(roleFromPath === "admin" && currentEndpoint === "register"){
      navigate("/admin/login")
    }
  },[roleFromPath,currentEndpoint,navigate])

  return (
    <>
      <Logo
        source={"/bioscope-logo.png"}
        name={"Bioscope"}
        className="h-24 w-24 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <section className="flex flex-col justify-center items-center mt-8">
        <ToastContainer />
        <title>{currentEndpoint === "login" ? "Login" : "Register"}</title>
        {currentEndpoint === "login" ? (
          <div className="p-6 rounded flex flex-col space-y-4 min-w-[50%] md:min-w-[40%] bg-white shadow-md">
            <LoginForm toast={toast} role={roleFromPath} />{" "}
            <p className="text-sm font-medium text-center">
              Don't have an account?{" "}
              <Link
                to={`${
                  roleFromPath === "user"
                    ? "/register"
                    : `/${roleFromPath}/register`
                }`}
                className="text-blue-500 underline"
              >
                Join now
              </Link>
            </p>
          </div>
        ) : (
          <div className="p-6 rounded flex flex-col space-y-4 min-w-[50%] md:min-w-[40%] bg-white shadow-md">
            <RegisterForm toast={toast} role={roleFromPath} />
            <p className="text-sm font-medium text-center">
              Already have an account?{" "}
              <Link
                to={`${
                  roleFromPath === "user"
                    ? "/login"
                    : `/${roleFromPath}/login`
                }`}
                className="text-blue-500 underline"
              >
                Login
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default Authentication;
