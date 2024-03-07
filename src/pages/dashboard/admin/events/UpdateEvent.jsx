import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

const UpdateEvent = () => {
    const axios = useAxios();
    const { id } = useParams();
    const eventDetails = useLoaderData();
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
        const loadingToast = toast.loading("Updating Event..");
        try {
            const res = await axios.put(`/edit-event/${id}`, updateData);
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
                    Update a Event
                </h3>
            </div>
            <div className="bg-rose-50/50 dark:bg-[#0c1427] border dark:border-gray-800  rounded py-2 px-3 md:w-3/4 mx-auto">
                <form
                    className="w-full  space-y-2 p-3 md:p-5  rounded-md"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className=" ">
                        <label className="block text-sm font-medium text-gray-700 py-1.5">
                            <span className=" ">Event Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Event Title"
                            {...register("product_name", {
                                required: true,
                                maxLength: 100,
                            })}
                            defaultValue={eventDetails?.title}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        />
                        {errors.title && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.title?.message}
                            </span>
                        )}
                    </div>

                    <div className="md:flex gap-3 ">
                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    Event seats
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Event Seats"
                                {...register("seat", { required: true })}
                                defaultValue={eventDetails?.seat}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            />
                            {errors.seat && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.seat?.message}
                                </span>
                            )}
                        </div>

                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    Event type
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="event type"
                                {...register("type", { required: true })}
                                defaultValue={eventDetails?.type}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            />
                            {errors.type && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.type?.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="md:flex gap-3">
                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    Event Location
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="location"
                                {...register("location", { required: true })}
                                defaultValue={eventDetails?.location}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            />
                            {errors.location && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.location?.message}
                                </span>
                            )}
                        </div>

                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    Event Date
                                </span>
                            </label>
                            <input
                                type="date"
                                placeholder="date"
                                {...register("date", { required: true })}
                                defaultValue={eventDetails?.date}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            />
                            {errors.date && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.date?.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="md:flex gap-3">
                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    Speakers
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="speakers"
                                {...register("speakers", { required: true })}
                                defaultValue={eventDetails?.speakers}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            />
                            {errors.speakers && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.speakers?.message}
                                </span>
                            )}
                        </div>

                        <div className="md:w-1/2">
                            <label className="">
                                <span className="block text-sm font-medium text-gray-700 py-1.5">
                                    Sponsor
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Sponsor"
                                {...register("sponsor", { required: true })}
                                defaultValue={eventDetails?.sponsor}
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            />
                            {errors.sponsor && (
                                <span className="text-center text-red-500 flex items-center gap-1">
                                    <BiErrorCircle
                                        className="inline-block ml-2"
                                        size={15}
                                    />
                                    {errors.sponsor?.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <label className="">
                            <span className="block text-sm font-medium text-gray-700 py-1.5">
                                Event Details
                            </span>
                        </label>

                        <textarea
                            cols="10"
                            rows="10"
                            type="text"
                            placeholder="Description"
                            defaultValue={eventDetails?.sponsor}
                            {...register("description", { required: true })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                        ></textarea>
                        {errors.description && (
                            <span className="text-center text-red-500 flex items-center gap-1">
                                <BiErrorCircle
                                    className="inline-block ml-2"
                                    size={15}
                                />
                                {errors.description?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-center ">
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className=" w-full max-w-xs"
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
                    <div className=" text-center mt-6">
                        <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                        >
                            Update Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEvent;
