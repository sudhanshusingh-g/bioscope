import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  const validateForm=()=>{
    let tempErrors={};
    if(!formData.email){
      tempErrors.email="Enter a valid email";
    }
    if(formData.password.length <8){
      tempErrors.password="Password is too small.Try again"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm) return;

    setTimeout(()=>{
      console.log(formData);
    },2000)
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
      />
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
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
