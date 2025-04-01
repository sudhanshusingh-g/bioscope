import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Logo from "../components/Logo";

function Authentication() {

  const currentEndpoint = window.location.pathname.split("/")[1];

  const navigate=useNavigate();

  return (
    <>
        <Logo source={"/bioscope-logo.png"} name={"Bioscope"} className="h-24 w-24 cursor-pointer" onClick={()=>navigate("/")}/>
      <section className="flex flex-col justify-center items-center mt-8">
        <title>{currentEndpoint === "login" ? "Login" : "Register"}</title>
        {currentEndpoint === "login" ? (
          <div className="p-6 rounded flex flex-col space-y-4 min-w-[50%] md:min-w-[40%] bg-white shadow-md">
            <LoginForm />{" "}
            <p className="text-sm font-medium text-center">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-blue-500 underline">
                Join now
              </Link>
            </p>
          </div>
        ) : (
          <div className="p-6 rounded flex flex-col space-y-4 min-w-[50%] md:min-w-[40%] bg-white shadow-md">
            <RegisterForm />
            <p className="text-sm font-medium text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-blue-500 underline">
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
