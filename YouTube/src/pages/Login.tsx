import  {  useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useLogin } from "../hooks/useLogin";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../store/store";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [icon, setIcon] = useState(<FaEye />);
  const [type, setType] = useState("password");

 

  const loginMutate = useLogin();
  const { sub , setSub } = useAuth();

  console.log(sub);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup.string().required("Password is required"),
    }),

    onSubmit: (values) => {
      setSub(false);
      loginMutate.mutate(values);
    },
  });

  function handleopen() {
    if (isOpen) {
      setType("text");
      setIcon(<FaEyeSlash />);
      setIsOpen(false);
    } else {
      setType("password");
      setIcon(<FaEye />);
      setIsOpen(true);
    }
  }

  return (
    <div className="flex justify-center mt-[190px]">
      <div className="w-[500px] h-[300px] bg-slate-200 rounded-[10px] p-[20px]">
        <div>
          <h1 className="text-4xl flex justify-center mt-2.5">Login Form</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col mt-[30px] gap-[15px]"
          >
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                className="px-[10px] w-[100%] h-[40px] bg-slate-100 rounded-[10px]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  type={type}
                  placeholder="Enter your password"
                  name="password"
                  value={formik.values.password}
                  className="px-[10px] w-[100%] h-[40px] bg-slate-100 rounded-[10px]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleopen}
                  className="absolute top-[13px] right-[10px]"
                >
                  {icon}
                </button>
              </div>
            </div>

            <div className="mt-[10px] flex justify-end mr-[2px]">
              <button
                type="submit"
                className={`w-[70px] h-[30px] bg-slate-100 rounded-[10px] ${!sub ? "disabled:opacity-50 w-[90px]" : ""}`}
              >
                {sub ? "Submit" : "Submitting"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
