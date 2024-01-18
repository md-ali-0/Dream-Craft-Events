import banner from '../../assets/booking/banner.jpg';

const Banner = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat bg-fixed h-[100vh]" style={{ backgroundImage: `url('${banner}')` }}>
            <div className='bg-black bg-opacity-25 h-[100vh] flex items-center justify-center'>
                <div>
                    <h2 className='text-3xl md:text-7xl text-center max-w-4xl mx-auto font-bold text-white'>InnovateSphere - Tech & Beyond Summit</h2>
                    <p className='text-xl text-center text-white font-medium mt-5'>by <span className='text-red-500'>Data Defenders</span></p>
                </div>
            </div>
        </section>
    );
};

export default Banner;