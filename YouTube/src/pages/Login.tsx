import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { object, string } from "yup";
import { Formik } from "formik";
import { useLogin } from "../hooks/useLogin";


const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [icon, setIcon] = useState(<FaEye />);
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutate = useLogin();

  function handleopen() {
    if (isOpen) {
      setType((c) => (c = "text"));
      setIcon((eye) => (eye = <FaEyeSlash />));
      setIsOpen(false);
    } else {
      setType((c) => (c = "password"));
      setIcon((eye) => (eye = <FaEye />));
      setIsOpen(true);
    }
  }

  function handleSubmit(e:Event) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    if(email=="" || password==""){
      alert("Enter all the field value")
    }

    const obj = {
      email,
      password,
    };
    
    loginMutate.mutate(obj);

  }

  return (
    <form className="flex justify-center mt-[190px]" onSubmit={handleSubmit}>
      <div className="w-[500px] h-[300px] bg-slate-200 rounded-[10px] p-[20px]">
        <div>
          <h1 className="text-4xl flex justify-center mt-2.5">Login Form</h1>
          <div className="flex flex-col mt-[30px] gap-[15px]">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              className="px-[10px] ml-auto  w-[100%] h-[40px] bg-slate-100 rounded-[10px]"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={type}
                placeholder="Enter your password"
                name="password"
                value={password}
                className="px-[10px] ml-auto  w-[100%] h-[40px] bg-slate-100 rounded-[10px]"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                onClick={handleopen}
                className="absolute top-[13px] right-[10px]"
              >
                {icon}
              </button>
            </div>
          </div>
          <div className="mt-[10px] flex justify-end mr-[2px]">
            <button
              className="w-[70px] h-[30px] bg-slate-100 rounded-[10px]"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
