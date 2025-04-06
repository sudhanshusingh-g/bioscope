import {axiosInstance} from "./index";

// Create user
export const RegisterUser=async (values)=>{
    try {
        const response=await axiosInstance.post("/users/register",values);
        return  response.data;
    } catch (error) {
        console.error(error.response.data);
        return error.response.data;
    }
}

// Login user
export const LoginUser=async(values)=>{
    try {
        const response=await axiosInstance.post("/users/login",values);
        return response.data;
    } catch (error) {
        console.error(error.response);
        return error.response.data;
    }
}

// CurrentUser
export const CurrentUser=async()=>{
    try{
    const response = await axiosInstance.get("/users/profile");
    return response.data;
    }catch (error) {
        console.error(error.response.data);
        return error.response.data;
    }
}