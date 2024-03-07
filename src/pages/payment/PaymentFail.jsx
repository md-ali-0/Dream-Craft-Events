import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import { MdError} from "react-icons/md";

const PaymentFail = () => {
    return (
        <div>
            <Container>
                <div className="flex flex-col justify-center items-center h-[60vh]">
                    <MdError className="text-9xl text-red-500" />

                    <h2 className="text-3xl text-red-500 mt-3 font-semibold uppercase">Payment Failed</h2>
                    <p className="text-xl text-center text-secondary font-medium mt-2">
                        An error occurred white processing your payment 
                    </p>
                    <Link to='/events' className="bg-primary rounded-full py-2 px-6 mt-6 text-white font-medium" >Try Again</Link>
                </div>

            </Container>
        </div>
    );
};

export default PaymentFail;