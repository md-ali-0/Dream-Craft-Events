import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animation/animation.json";

const Mails = () => {
  const fetchContacts = async () => {
    const response = await fetch(
      "https://dream-craft-server.vercel.app/contact"
      
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: allContacts = [],
    isLoading: isLoadingContacts,
    error: contactsError,
  } = useQuery({
    queryKey: ["allContacts"],
    queryFn: fetchContacts,
  });

  if (isLoadingContacts) {
    return (
      <Lottie
        className="flex justify-center items-center min-h-[70%]"
        animationData={loadingAnimation}
        width={500}
        height={350}
      />
    );
  }

  if (contactsError) {
    return <p>Error loading contacts: {contactsError.message}</p>;
  }

  return (
    <div>
      <h2 className="text-center text-primary text-2xl font-semibold mb-4">
        All Mails
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-sm border-b text-gray-700 uppercase bg-rose-50 font-semibold">
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Sender Email</th>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {allContacts.map((mail, index) => (
              <tr key={mail._id} className="border-b text-center">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{mail.email}</td>
                <td className="px-4 py-2">{mail.subject}</td>
                <td className="px-4 py-2">{mail.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mails;
