import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import useAuth from "../../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { name, image, password } = data;
        const imageFile = { image: image[0] };
        console.log(name, imageFile, password);
    };
    return (
        <div>
            <div className="bg-white rounded-lg shadow-xl pb-8">
                <div className="w-full h-[250px]">
                    <img
                        src="https://timelinecovers.pro/facebook-cover/download/life-facebook-cover.jpg"
                        className="w-full h-full rounded-tl-lg rounded-tr-lg"
                    />
                </div>
                <div className="flex flex-col items-center -mt-20">
                    <img
                        src={user?.image}
                        className="w-40 h-40 object-cover border-4 border-white rounded-full"
                    />
                    <div className="flex items-center space-x-2 mt-2">
                        <p className="text-2xl">{user?.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                        Administrator, DreamCraft
                    </p>
                </div>
                <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                    <div className="flex items-center space-x-4 mt-2">
                        <button
                            onClick={() => setOpenModal(true)}
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
                        >
                            <CiEdit />
                            <span>Update</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold">
                            Personal Info
                        </h4>
                        <ul className="mt-2 text-gray-700">
                            <li className="flex border-y py-2">
                                <span className="font-bold w-24">
                                    Full name:
                                </span>
                                <span className="text-gray-700">
                                    {user?.name}
                                </span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Email:</span>
                                <span className="text-gray-700">
                                    {user?.email}
                                </span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">
                                    Last Login:
                                </span>
                                <span className="text-gray-700">
                                    {new Date(user?.createdAt).toLocaleString()}
                                </span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Joined:</span>
                                <span className="text-gray-700">
                                    {new Date(user?.createdAt).toLocaleString()}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div show={openModal} className="absolute top-[50%] -translate-x-0 translate-y-1/2 right-1/2" size="4xl" onClose={onCloseModal}>
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                        Modal title
                    </h3>
                    <button
                        type="button"
                        className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-overlay="#hs-basic-modal"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Update Profile
                    </h3>
                    <form
                        className="container flex flex-col mx-auto space-y-12"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            <div className="grid grid-cols-6 gap-4 col-span-full">
                                <div className="col-span-full sm:col-span-3">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register("name", {
                                            required: "Name is required.",
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "Name should be at least 5 characters.",
                                            },
                                            maxLength: {
                                                value: 15,
                                                message:
                                                    "Name should not exceed 15 characters.",
                                            },
                                        })}
                                        placeholder="Full Name"
                                        className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                        defaultValue={user?.displayName}
                                    />
                                    {errors.name && (
                                        <span className="text-center text-red-500 flex items-center gap-1">
                                            <BiErrorCircle
                                                className="inline-block ml-2"
                                                size={15}
                                            />
                                            {errors.name?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Profile Picture
                                    </label>
                                    <input
                                        type="file"
                                        {...register("image", {
                                            required:
                                                "Profile Picture is required.",
                                            validate: (value) => {
                                                const acceptFormat = [
                                                    "png",
                                                    "jpg",
                                                    "jpeg",
                                                ];
                                                const fileExtension =
                                                    value[0]?.name
                                                        .split(".")
                                                        .pop()
                                                        .toLowerCase();
                                                if (
                                                    !acceptFormat.includes(
                                                        fileExtension
                                                    )
                                                ) {
                                                    return "Invalid file. Select .png, .jpg, .jpeg only.";
                                                }
                                                return true;
                                            },
                                        })}
                                        accept="image/png, image/jpeg"
                                        className="w-full block border bg-white placeholder-gray-500 leading-5 rounded-lg border-gray-200 focus:border-blue-500 px-2"
                                    />
                                    {errors.image && (
                                        <span className="text-center text-red-500 flex items-center gap-1">
                                            <BiErrorCircle
                                                className="inline-block ml-2"
                                                size={15}
                                            />
                                            {errors.image?.message}
                                        </span>
                                    )}
                                </div>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", {
                                            required: "Email is Required",
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                                message: "Invalid Email format",
                                            },
                                        })}
                                        readOnly
                                        defaultValue={user?.email}
                                        className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                    />
                                    {errors.email && (
                                        <div className="text-md text-red-500">
                                            <span>{errors.email.message}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="col-span-full">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        {...register("password", {
                                            required: "Password is required.",
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Password must be at least 6 characters long.",
                                            },
                                            pattern: {
                                                value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
                                                message:
                                                    "Invalid password: no capitals, specials or numbers.",
                                            },
                                        })}
                                        className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                        autoComplete="current-password"
                                    />
                                    {errors.password && (
                                        <span className="text-center text-red-500 flex items-center gap-1">
                                            <BiErrorCircle
                                                className="inline-block ml-2"
                                                size={15}
                                            />
                                            {errors.password?.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </fieldset>
                        <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                        >
                            Update
                        </button>
                    </form>
                </div>
            </div> */}
        </div>
    );
};

export default Profile;
