import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAxios from "../../../../hooks/useAxios";
import uploadImage from "../../../../utils/useImageUpload";

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const axios = useAxios()
    const onSubmit = async (data) => {
        const { title, type, location, speakers, sponsor,description, seat, image, date } = data;
        const imageResult = await uploadImage(image[0]);
        const  loadingToast = toast.loading('Creating New Event..');
        if (imageResult) {
            const newEvent = { title, type, location, speakers, sponsor,description, seat, image:imageResult, date }
            await axios.post('/add-event',newEvent)
            reset();
            toast.dismiss(loadingToast);
            toast.success("Event successfully added");
        }
    };

    return (
        <div className="">
            <div className="flex justify-center items-center">
                <h3 className="text-primary text-4xl font-bold py-5">
                    Add Event
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
                            {...register("title", {
                                required: true,
                                maxLength: 100,
                            })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            required
                        />
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
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                required
                            />
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
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                required
                            />
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
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                required
                            />
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
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                required
                            />
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
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                required
                            />
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
                                className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                                required
                            />
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
                            {...register("description", { required: true })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            required
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-center ">
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className=" w-full max-w-xs"
                        />
                    </div>
                    <div className=" text-center mt-6">
                        <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                        >
                            Create New Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
