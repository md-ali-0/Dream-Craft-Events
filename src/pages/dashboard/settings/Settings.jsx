import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

const Settings = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const { siteName, siteLogo } = data;
        console.log(siteName, siteLogo);
    };
    
    return (
        <div>
            
            <div className="bg-white rounded-lg shadow-xl px-5 py-10 mx-auto lg:w-1/2">
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Site Name
                        </label>
                        <input
                            id="siteName"
                            type="text"
                            {...register("siteName", {
                                required: "Site Name is required.",
                            })}
                            placeholder="Enter Website Name"
                            className="mt-1 p-2 w-full border border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            defaultValue={''}
                        />
                        {errors.siteName && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle className="inline-block ml-2" size={15} />
                                {errors.siteName?.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                            Site logo
                        </label>
                        <span className="text-sm text-gray-500">Image Size Will Be 350x80</span>
                        <input
                            type="file"
                            {...register("siteLogo", {
                                required: "Logo is required.",
                                validate: (value) => {
                                    const acceptFormat = ["png"];
                                    const fileExtension = value[0]?.name
                                        .split(".")
                                        .pop()
                                        .toLowerCase();
                                    if (!acceptFormat.includes(fileExtension)) {
                                        return "Invalid Image. We Accept .png only.";
                                    }
                                    return true;
                                },
                            })}
                            accept="image/png, image/jpeg"
                            className="w-full block border bg-white placeholder-gray-500 leading-5 rounded-lg border-gray-200 focus:border-blue-500 px-2"
                        />
                        {errors.siteLogo && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle className="inline-block ml-2" size={15} />
                                {errors.siteLogo?.message}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;