import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginValidationSchema } from "../utils/validation";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserToken } from "../redux/authSlice";

const Login = () => {
    const [viewPassword, setViewPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values, { setSubmitting }) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/login`, values)

            if (res?.data?.token) {
                dispatch(setUserToken(res?.data?.token))
                localStorage.setItem("authToken", res?.data?.token);
                toast.success("Login Successful...");
                navigate("/");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full sm:w-[70%] md:w-[50%] bg-blue-50 border border-blue-300 hover:shadow-2xl min-h-[50%] p-5 rounded-2xl">
                <h1 className="font-black text-3xl">Welcome Back</h1>
                <p className="text-slate-500">Please enter your details</p>

                <Formik
                    initialValues={{ email: "eve.holt@reqres.in", password: "cityslicka" }}
                    validationSchema={LoginValidationSchema}
                    onSubmit={handleLogin}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="w-full flex flex-col items-center">
                            {/* Email Field */}
                            <div className="flex flex-col mt-4 w-[90%]">
                                <h4 className="font-semibold text-md">Email address</h4>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="admin@gmail.com"
                                    className={`border p-1.5 px-4 w-full rounded-xl ${errors.email && touched.email ? "border-red-500" : "border-slate-600"
                                        }`}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col mt-4 w-[90%]">
                                <h4 className="font-semibold text-md">Password</h4>
                                <div className="relative w-full flex items-center">
                                    <Field
                                        name="password"
                                        type={viewPassword ? "text" : "password"}
                                        placeholder="*********"
                                        className={`border px-4 p-1.5 w-full rounded-xl ${errors.password && touched.password ? "border-red-500" : "border-slate-600"
                                            }`}
                                    />
                                    {viewPassword ? (
                                        <FaRegEye
                                            className="absolute right-4 cursor-pointer"
                                            onClick={() => setViewPassword(!viewPassword)}
                                        />
                                    ) : (
                                        <FaRegEyeSlash
                                            className="absolute right-4 cursor-pointer"
                                            onClick={() => setViewPassword(!viewPassword)}
                                        />
                                    )}
                                </div>
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`border w-[90%] mt-8 p-1 rounded-xl cursor-pointer py-1.5 font-semibold transition-all ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-800"
                                    }`}
                            >
                                {isSubmitting ? "Signing in..." : "Sign in"}
                            </button>
                        </Form>
                    )}
                </Formik>

                <p className="mt-5 cursor-pointer">
                    Don't have an account? <span className="underline text-purple-700">Sign Up</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
