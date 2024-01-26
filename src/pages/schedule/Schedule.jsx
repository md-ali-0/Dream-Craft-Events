// import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../../components/container/Container";

const Schedule = () => {
    return (
        <Container>
            {/* <Breadcrumb /> */}
            <div className="py-5">
                <h3 className="text-center uppercase text-secondary font-extrabold text-3xl">
                    Recent Event Schedule
                </h3>
                <h3 style={{WebkitTextStrokeWidth:'1px', WebkitTextStrokeColor: '#ce1446'}} className="text-5xl text-white font-bold text-center py-2">
                    {new Date().toLocaleDateString()}
                </h3>
                <div className="flex border border-primary rounded-md my-5">
                    <div className="w-1/3 bg-primary text-gray-100">
                        <div className="py-5">
                            <h3 className="text-center text-2xl font-bold">
                                10.00AM - 11.30PM
                            </h3>
                            <h4 className="text-center font-bold">
                                Room No: 01
                            </h4>
                        </div>
                        <div className="flex items-center gap-5">
                            <img
                                src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm1.png"
                                alt=""
                            />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">
                                    John Loganin
                                </h3>
                                <h4 className="font-bold">Marketing</h4>
                                <ul className="flex gap-3">
                                    <li>
                                        <FaFacebook size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaInstagram size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaLinkedin size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaTwitter size={20} fill="white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 p-5 flex flex-col justify-center gap-5">
                        <h3 className="text-2xl font-bold text-secondary">
                            Nulla nisl tellus hendrerit nec dignissim
                            pellentesqu posu in est Suspendisse bibendum.
                        </h3>
                        <p className="text-gray-600">
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin ut sollicitudin.
                        </p>
                    </div>
                </div>
                <div className="flex border border-primary rounded-md my-5">
                    <div className="w-1/3 bg-primary text-gray-100">
                        <div className="py-5">
                            <h3 className="text-center text-2xl font-bold">
                                10.00AM - 11.30PM
                            </h3>
                            <h4 className="text-center font-bold">
                                Room No: 01
                            </h4>
                        </div>
                        <div className="flex items-center gap-5">
                            <img
                                src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm2.png"
                                alt=""
                            />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">
                                    John Loganin
                                </h3>
                                <h4 className="font-bold">Marketing</h4>
                                <ul className="flex gap-3">
                                    <li>
                                        <FaFacebook size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaInstagram size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaLinkedin size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaTwitter size={20} fill="white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 p-5 flex flex-col justify-center gap-5">
                        <h3 className="text-2xl font-bold text-secondary">
                            Nulla nisl tellus hendrerit nec dignissim
                            pellentesqu posu in est Suspendisse bibendum.
                        </h3>
                        <p className="text-gray-600">
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin ut sollicitudin.
                        </p>
                    </div>
                </div>
                <div className="flex border border-primary rounded-md my-5">
                    <div className="w-1/3 bg-primary text-gray-100">
                        <div className="py-5">
                            <h3 className="text-center text-2xl font-bold">
                                10.00AM - 11.30PM
                            </h3>
                            <h4 className="text-center font-bold">
                                Room No: 01
                            </h4>
                        </div>
                        <div className="flex items-center gap-5">
                            <img
                                src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm3.png"
                                alt=""
                            />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">
                                    John Loganin
                                </h3>
                                <h4 className="font-bold">Marketing</h4>
                                <ul className="flex gap-3">
                                    <li>
                                        <FaFacebook size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaInstagram size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaLinkedin size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaTwitter size={20} fill="white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 p-5 flex flex-col justify-center gap-5">
                        <h3 className="text-2xl font-bold text-secondary">
                            Nulla nisl tellus hendrerit nec dignissim
                            pellentesqu posu in est Suspendisse bibendum.
                        </h3>
                        <p className="text-gray-600">
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin ut sollicitudin.
                        </p>
                    </div>
                </div>
                <div className="flex border border-primary rounded-md my-5">
                    <div className="w-1/3 bg-primary text-gray-100">
                        <div className="py-5">
                            <h3 className="text-center text-2xl font-bold">
                                10.00AM - 11.30PM
                            </h3>
                            <h4 className="text-center font-bold">
                                Room No: 01
                            </h4>
                        </div>
                        <div className="flex items-center gap-5">
                            <img
                                src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-sm4.png"
                                alt=""
                            />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">
                                    John Loganin
                                </h3>
                                <h4 className="font-bold">Marketing</h4>
                                <ul className="flex gap-3">
                                    <li>
                                        <FaFacebook size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaInstagram size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaLinkedin size={20} fill="white" />
                                    </li>
                                    <li>
                                        <FaTwitter size={20} fill="white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 p-5 flex flex-col justify-center gap-5">
                        <h3 className="text-2xl font-bold text-secondary">
                            Nulla nisl tellus hendrerit nec dignissim
                            pellentesqu posu in est Suspendisse bibendum.
                        </h3>
                        <p className="text-gray-600">
                            Cras semper, massa vel aliquam luctus, eros odio
                            tempor turpis, ac placerat metus tortor eget magna.
                            Donec mattis posuere pharetra. Donec vestibulum
                            ornare velit ut sollicitudin ut sollicitudin.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Schedule;
