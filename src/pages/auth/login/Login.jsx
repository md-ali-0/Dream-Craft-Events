import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoInfo } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const navigation = useNavigate()
    const {login} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const toastLoading = toast.loading('User Signing...')
        const {email, password} = data
        try {
            await login(email, password)
            toast.dismiss(toastLoading)
            toast.success('Login Successfully')
            navigation('/dashboard')
        } catch (error) {
            toast.dismiss(toastLoading)
            toast.error(error?.response?.data)
        }
    };
    
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <div className="text-center space-y-2">
                                <h1 className="text-xl font-semibold">
                                    Welcome back
                                </h1>
                                <small className="text-gray-400 dark:text-gray-200">
                                    Sign in to your account to start using
                                    Dream Craft
                                </small>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-1 text-gray-600 text-sm font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is Required",
                                    })}
                                    className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
                                        errors.email
                                            ? "border-red-500 focus:border-red-500"
                                            : "focus:border-primary"
                                    }
                                    `}
                                    placeholder="Enter Email Address"
                                />
                                {errors.email && (
                                    <span className="flex items-center gap-1 py-1 text-red-500">
                                        <GoInfo className="inline" />
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="password"
                                    className="block mb-1 text-gray-600 text-sm font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    type={passwordShow ? "text" : "password"}
                                    id="password"
                                    {...register("password", {
                                        required: "Password is Required",
                                    })}
                                    className={`w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600 focus-visible:shadow-none dark:border-form-strokeDark dark:bg-form-input ${
                                        errors.password
                                            ? "border-red-500 focus:border-red-500"
                                            : "focus:border-primary"
                                    }
                                    `}
                                    placeholder="Enter Password"
                                />
                                <span
                                    onClick={() =>
                                        setPasswordShow(!passwordShow)
                                    }
                                    className="absolute top-[38px] text-gray-500 right-3 cursor-pointer select-none"
                                >
                                    {passwordShow ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                            <line
                                                x1="1"
                                                y1="1"
                                                x2="23"
                                                y2="23"
                                            ></line>
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                    )}
                                </span>
                                {errors.password && (
                                    <span className="flex items-center gap-1 py-1 text-red-500">
                                        <GoInfo className="inline" />
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button className="mt-4 w-full bg-primary text-white py-2 rounded-md text-md tracking-wide">
                            Sign In
                        </button>
                        <div>
                            <div className="flex items-center my-3">
                                <span
                                    aria-hidden="true"
                                    className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
                                />
                                <span className="text-xs font-medium text-gray-800 bg-gray-100 rounded-full px-3 py-1 dark:bg-gray-700 dark:text-gray-200">
                                    or sign in with
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
                                />
                            </div>
                            <div className="grid grid-cols-1">
                                <button
                                    type="button"
                                    // onClick={handleGoogleLogin}
                                    className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                                >
                                    <svg
                                        className="bi bi-facebook inline-block w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path
                                            fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        ></path>
                                        <path
                                            fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        ></path>
                                        <path
                                            fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                    </svg>
                                    <span>Google</span>
                                </button>
                            </div>
                            <div className="p-5 text-sm text-center">
                                Don’t have an account yet?
                                <Link
                                    to="/register"
                                    className="font-medium text-primary hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                    <span className="px-1 font-bold">
                                        Sign Up
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
