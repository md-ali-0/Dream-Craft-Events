import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoInfo } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import GoogleLogin from "../../../components/shared/googleLogin/GoogleLogin";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const navigation = useNavigate()
    const {login} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const toastLoading = toast.loading('User Signing...')
        const {email, password} = data
        try {
            const {data} = await login(email, password)
            toast.dismiss(toastLoading)
            toast.success('Login Successfully')
            
            if (data.user.role === 'admin') {
                navigation('/dashboard/admin')
            }else if(data.user.role === 'organiger'){
                navigation('/dashboard/organiger')
            }else{
                navigation(from)
            }
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
                                <GoogleLogin/>
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