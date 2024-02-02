import { Link } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";

const EventBanner = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat h-[70vh]" style={{ backgroundImage: `url('https://s3.ap-southeast-1.amazonaws.com/localiiz-prod/uploads/cny-lunar-new-year-displays-decorations-hong-kong-ifc.jpg?mtime=20210209023619&focal=none')` }}>
            <div className='bg-black bg-opacity-70 h-full flex items-center justify-start'>
                <div className="ml-4 md:-ml-10 lg:ml-20">
                    <h2 className="text-5xl text-white font-bold">Shop</h2>
                    <div className="flex items-center gap-2 mt-3 text-xl font-medium text-primary">
                        <Link to='/' className="text-white">Home</Link>
                        <IoPlayOutline />
                        <Link to='/shop'>Shop</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventBanner;