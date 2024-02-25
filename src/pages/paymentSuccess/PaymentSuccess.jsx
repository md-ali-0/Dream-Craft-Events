import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../../components/container/Container";

const PaymentSuccess = () => {
    const { tranId } = useParams()

    return (
        <Container>
            <div className="flex flex-col justify-center items-center h-[60vh]">
                <FaCheckCircle className="text-9xl text-green-500" />

                <h2 className="text-3xl text-primary mt-3 font-semibold">Transaction Completed Successfully</h2>
                <p className="text-xl text-secondary font-medium mt-2">Thank your for your payment</p>
                <p className="bg-primary rounded-full py-3 px-6 mt-4 text-white font-medium">Transaction Id: {tranId} </p>
            </div>

        </Container>
    );
};

export default PaymentSuccess;