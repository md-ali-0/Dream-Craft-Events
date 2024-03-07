import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";
import PageHeader from "../../../components/pageHeader/PageHeader";
import { RiShieldUserLine } from "react-icons/ri";
import { BsFileLock } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import uploadImage from "../../../utils/useImageUpload";

const Profile = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [userImage, setUserImage] = useState(user?.image);
  const [userCover, setUserCover] = useState(user?.cover);
  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("User Updating ... ");
    try {
      await axios.put(`/edit-user/${user?._id}`, data);
      toast.dismiss(loadingToast);
      toast.success("Successfully Changed!");
    } catch (error) {
      //console.log(error);
    }
  };

  const passwordSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirm_password.value;

    if (password === confirmPassword) {
      const loadingToast = toast.loading("Password Updating ... ");
      try {
        await axios.put(`/update-pass/${user?._id}`, { password: password });
        toast.dismiss(loadingToast);
        toast.success("Successfully Changed!");
      } catch (error) {
        //console.log(error);
      }
    } else {
      toast.error("Password and Confirm Password Must be Same !");
    }
  };

  const coverImageChange = async (e) => {
    e.preventDefault()
    const loadingToast = toast.loading("Cover Image Updating ... ");
    const imageurl = await uploadImage(e.target.files[0])
    if (imageurl) {
      try {
        await axios.put(`/edit-user/${user?._id}`, { cover: imageurl });
        toast.dismiss(loadingToast);
        toast.success("Successfully Changed!");
        setUserCover(imageurl)
        user.image = imageurl
      } catch (error) {
        //console.log(error);
      }
    }
  }
  const profileImageChange = async (e) => {
    e.preventDefault()
    const loadingToast = toast.loading("Profile Image Updating ... ");
    const imageurl = await uploadImage(e.target.files[0])
    if (imageurl) {
      try {
        await axios.put(`/edit-user/${user?._id}`, { image: imageurl });
        toast.dismiss(loadingToast);
        toast.success("Successfully Changed!");
        setUserImage(imageurl)
        user.image = imageurl
      } catch (error) {
        //console.log(error);
      }
    }
  }
  return (
    <div>
      <PageHeader />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 xl:col-span-4">
          <div className="relative mb-6 flex flex-col rounded border bg-white shadow">
            <div className="p-6 relative">
              <div className="flex relative before:bg-black/50 before:absolute before:w-full before:h-full before:rounded-sm">
                <img
                  src={userCover}
                  alt=""
                  className="h-[200px] w-full rounded-sm"
                  id="profile-img2"
                />
                <span className="absolute top-5 right-5 flex p-2 rounded-sm ring-1 ring-black/10 text-white bg-black/10 leading-none">
                  <RiPencilLine className="inline" size={20} />
                  <input
                    type="file"
                    onChange={coverImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    id="profile-change2"
                  />
                </span>
              </div>
              <div className="absolute top-[4.5rem] inset-x-0 text-center space-y-3">
                <div className="flex justify-center w-full">
                  <div className="relative">
                    <img
                      src={userImage}
                      className="w-24 h-24 rounded-full ring-4 ring-white/10 mx-auto"
                      id="profile-img"
                      alt="pofile-img"
                    />
                    <span className="absolute bottom-0 right-0 block p-1 rounded-full ring-2 ring-white/10 text-white bg-white/10 dark:bg-bgdark leading-none">
                      <RiPencilLine className="inline" size={20} />
                      <input
                        type="file"
                        name="image"
                        onChange={profileImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="profile-change"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mb-6 flex flex-col rounded border bg-white shadow">
            <div className="border py-3 px-4 font-medium">
              <h5 className="text-base font-semibold text-gray-700 leading-none flex">
                <BsFileLock className="mr-2" />
                Security Settings
              </h5>
            </div>
            <form className="p-6 pt-0" onSubmit={passwordSubmit}>
              <div>
                <div className="my-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500 mb-0">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500 mb-0">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-end gap-2 mb-3 text-left px-3">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-rose-600 via-rose-700 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 "
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-8">
          <form
            className="relative mb-6 flex flex-col rounded border bg-white shadow"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative flex flex-col rounded bg-white shadow-none">
              <div className="border py-3 px-4 font-medium">
                <h5 className="text-base font-semibold text-gray-700 leading-none flex">
                  <RiShieldUserLine className="mr-2" />
                  Profile Settings
                </h5>
              </div>
              <div className="p-6">
                <div>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstname", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.firstname}
                        placeholder="Firstname"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastname", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.lastname}
                        placeholder="Lastname"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        {...register("phone", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.phone}
                        placeholder="+880 123-456-789"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.email}
                        readOnly={!user?.role !== "admin"}
                        placeholder="example@site.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        Address
                      </label>
                      <input
                        type="text"
                        {...register("address", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.address}
                        placeholder="Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        City
                      </label>
                      <input
                        type="text"
                        {...register("city", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.city}
                        placeholder="City"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        Country
                      </label>
                      <input
                        type="text"
                        {...register("country", { required: true })}
                        className="my-auto block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        defaultValue={user?.country}
                        placeholder="Country"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-500 mb-0">
                        Bio
                      </label>
                      <textarea
                        {...register("bio", { required: true })}
                        className="block w-full rounded border py-3 px-4 text-sm outline-none shadow-sm"
                        rows={3}
                        placeholder="Add Your Bio"
                        defaultValue={user?.bio}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-end gap-2 mb-6 text-left px-3">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-rose-600 via-rose-700 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
