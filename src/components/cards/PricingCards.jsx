import standard from '../../assets/Pricing/standard.png'
import premium from '../../assets/Pricing/premium.png'
import vip from '../../assets/Pricing/vip.png'
import Container from '../container/Container';
import SectionTitle from '../sectionTitle/SectionTitle';


const PricingCards = () => {
    return (
        <Container >
            <div className='text-center mt-6'>
                <SectionTitle heading={'Get Your Seat'} ></SectionTitle>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='border-2 px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
                    <img className='w-20' src={standard} alt="" />
                    <p className='text-gray-500 italic'>Standard ticket</p>
                    <h1 className='text-5xl font-bold pt-3'>$59</h1>
                    <div className='text-gray-500 pt-3 pb-6'>
                        <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
                        <p className='py-3 px-6 line-through'>Video presentations</p>
                        <p className='border-y-2 py-3 px-6 line-through'>Meet all of our event speakers</p>
                    </div>
                    <button className='py-3 px-6 border-2 border-b-4 border-r-4 border-black'>
                        Get Ticket
                    </button>


                </div>
                <div className='border-2 px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
                    <img className='w-20' src={premium} alt="" />
                    <p className='text-gray-500 italic'>Standard ticket</p>
                    <h1 className='text-5xl font-bold pt-3'>$89</h1>
                    <div className='text-gray-500 pt-3 pb-6'>
                        <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
                        <p className='py-3 px-6 '>Video presentations</p>
                        <p className='border-y-2 py-3 px-6 line-through'>Meet all of our event speakers</p>
                    </div>
                    <button className='py-3 px-6 border-2 border-b-4 border-r-4 border-black'>
                        Get Ticket
                    </button>

                </div>
                <div className='border-2 px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
                    <img className='w-20' src={vip} alt="" />
                    <p className='text-gray-500 italic'>Standard ticket</p>
                    <h1 className='text-5xl font-bold pt-3'>$159</h1>
                    <div className='text-gray-500 pt-3 pb-6'>
                        <p className='border-y-2 py-3 px-6'>Full access to all lectures and workshops</p>
                        <p className='py-3 px-6'>Video presentations</p>
                        <p className='border-y-2 py-3 px-6'>Meet all of our event speakers</p>
                    </div>
                    <button className='py-3 px-6 border-2 border-b-4 border-r-4 border-black'>
                        Get Ticket
                    </button>

                </div>
            </div>
        </Container>
    );
};

export default PricingCards;