/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


import Swal from 'sweetalert2';

import { ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLoginPage from "../SocialLoginPage/SocialLoginPage";



const LoginPage =  () => {

    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);

    const location = useLocation();



    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'OK...',
                    text: "User logged in Successfully",

                })

                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,

                })

            })

    }

    return (
        <div>

            <ScrollRestoration />

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name="email" />
                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>

                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-primary text-black bg-[#F4E869]">Login</button>
                            </div>

                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover  text-blue-800 font-black">Create an account</Link>
                            </label>





                        </form>
                       <SocialLoginPage></SocialLoginPage>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;