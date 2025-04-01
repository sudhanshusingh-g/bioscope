import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateInput = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInput()) return;
    setTimeout(() => {
      console.log(formData);
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full">
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        required
      />
      <Link to={"/forgot-password"}>
        <p className="text-right text-sm underline text-blue-500">
          Forgot password?
        </p>
      </Link>
      <Button
        type="submit"
        className="mt-2 bg-blue-500 px-4 py-2 rounded text-white cursor-pointer hover:bg-blue-400 transition-all duration-300"
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
