import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiEdit } from "react-icons/ci";
import useAuth from "../../../hooks/useAuth";
import CustomEventModal from "../../customEvent/CustomEventModal";
import { toast } from "react-hot-toast";

const Profile = () => {
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = () => {
        setShowModal(!showModal)
    }
    const handleClose = (e) => {
        if (e.target.id == 'wrapper') {
            handleShowModal()
        }

    }
    const {
        register,
        handleSubmit,
        // reset,
        // formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // const { name, image, password } = data;
        // const imageFile = { image: image[0] };
        console.log(data);
        toast.success("Profile successfully updated");
        setShowModal(!showModal)
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
                        DreamCraft Events by Data Defenders 805.3 
                    </p>
                </div>
                <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                    <div className="flex items-center space-x-4 mt-2">
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center bg-primary hover:bg-rose-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
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

            <CustomEventModal isVisible={showModal} handleShowModal={handleShowModal}>
                <div id='wrapper' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClose}>
                    <div className='w-[550px] p-4 md:p-0'>
                        <div className='bg-white rounded-md relative'>
                            <div className="p-8  rounded max-w-md w-full mx-auto">
                                <h2 className="text-2xl font-semibold mb-8">Please drop your information</h2>

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700">Full name:</label>
                                            <input type="text" {...register("name", { required: true })} defaultValue={user?.name} id="name" name="name" className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300" />
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" {...register("email", { required: true })} defaultValue={user?.email} name="email" className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300" />
                                    </div>


                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700">Password</label>
                                        <input type="text" id="password" {...register("password", { required: true })} name="password" className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300" />
                                    </div>

                                    <div className="mt-6">
                                    <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90 w-full"
                        >Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className='bg-rose-600 text-white p-2 absolute top-4 right-4 rounded-full w-8 h-8 flex justify-center items-center'>
                                <button onClick={handleShowModal}>X</button>
                            </div>
                        </div>
                    </div>
                </div>

            </CustomEventModal>
        </div>
    );
};

export default Profile;
