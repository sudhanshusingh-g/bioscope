import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { RegisterUser } from "../api/user";
import { useNavigate } from "react-router-dom";

function RegisterForm({toast}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate=useNavigate();

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
  const validateForm=()=>{
      let tempErrors = {};
      if (!formData.email) {
        tempErrors.email = "Enter a valid email";
      }
      if (formData.password.length < 8) {
        tempErrors.password = "Password is too small. Try again";
      }
      if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = "Passwords do not match";
      }

      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const data=await RegisterUser(formData);
      if(data.success){
        toast.success(data.message);
        navigate("/login");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full">
      <Input
        label="Full Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        error={errors.email}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        error={errors.confirmPassword}
      />
      <Button
        type="submit"
        className="mt-2 bg-blue-500 px-4 py-2 rounded text-white cursor-pointer hover:bg-blue-400 transition-all duration-300"
      >
        Signup
      </Button>
    </form>
  );
}

export default RegisterForm;
