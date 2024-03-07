import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

const EditUser = () => {
    const axios = useAxios();
    const { id } = useParams();
    const userDetails = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        let updateData = {
            name: data.name,
            email: data.email,
            role: data.role,
        };
        if (data.password !== "") {
            updateData.password = data.password;
        }
        //console.log(updateData);
        const loadingToast = toast.loading("User Updating ... ");
        try {
            const res = await axios.put(`/edit-user/${id}`, updateData);
            //console.log(res.data);
            toast.dismiss(loadingToast);
            toast.success("Successfully created!");
        } catch (error) {
            //console.log(error);
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <h3 className="text-primary text-4xl font-bold py-5">
                    Update a User
                </h3>
            </div>
            <div className="bg-rose-50/50 dark:bg-[#0c1427] border dark:border-gray-800  rounded py-2 px-3 md:w-3/4 mx-auto">
                <form
                    className="container flex flex-col mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <div className="md:w-1/2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 py-1.5"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register("name", {
                                    required: "Name is Required",
                                })}
                                placeholder="Enter Full Name"
                                defaultValue={userDetails?.name}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
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
                        <div className="md:w-1/2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 py-1.5"
                            >
                                Select Role
                            </label>
                            <select
                                {...register("role", {
                                    required: "Role is Required",
                                })}
                                defaultValue={userDetails?.role}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            >
                                <option value="" disabled>
                                    Select Role
                                </option>
                                <option value="admin">Admin</option>
                                <option value="organizer">Organizer</option>
                                <option value="user">User</option>
                            </select>
                            {errors.role && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.role?.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            {...register("email", {
                                required: "Email is Required",
                            })}
                            defaultValue={userDetails?.email}
                            placeholder="Enter Email Address"
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        {errors.email && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-span-full">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 py-1.5"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register("password")}
                            placeholder="Enter Password"
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
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
                    <div className="text-center py-2">
                        <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                        >
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
