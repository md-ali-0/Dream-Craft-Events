/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */

import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';



import Swal from 'sweetalert2';

import { ScrollRestoration } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLoginPage from '../SocialLoginPage/SocialLoginPage';





const RegisterPage = () => {


    const { createUser, handleUpdateProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const handleSubmit = (e) => {

        e.preventDefault();

        //get field value
        const name = e.target.name.value;
        const email = e.target.email.value;
        const img = e.target.img.value;
        const password = e.target.password.value;

        console.log(name, email, img, password);

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Should be at least 6 Characters.',

            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Should have at least one capital letter.',

            })

            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\|]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Should have at least one special character.',

            })

            return;

        }

        //creating a new user

        createUser(email, password)
            .then(res => {
                handleUpdateProfile(name, img)
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'OK...',
                            text: "User Created Successfully",

                        })
                        navigate(location?.state ? location.state : '/')
                    })
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
        <>
            <div className="hero min-h-screen bg-base-200">
                <ScrollRestoration />
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' required/>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered " name="email" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" />
                            </div>

                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-primary  text-black bg-[#F4E869]" type='submit'>Register</button>
                            </div>

                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover text-blue-800 font-black">Please Login</Link>
                            </label>

                        </form>
                       <SocialLoginPage></SocialLoginPage>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;