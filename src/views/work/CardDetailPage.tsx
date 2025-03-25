import { useLocation, useNavigate } from "react-router-dom";
import CustomContainer from "@/components/custom/CustomContainer";
import { FaChevronLeft } from "react-icons/fa";

const CardDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state?.card; // Get card data from state
  // console.log("Location State:", location.state);
  // use ref, localstorage, context, redux to store this page detail otherwise it will lost on refresh


  if (!card)
    return (
      <div className="flex flex-col container ">
        <h2 className="h2 !mt-10">Card Not Found</h2>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-black"
      >
        <FaChevronLeft />
        <p>Back</p>
      </button>
      <h2 className="text-2xl font-bold">{card.title}</h2>
      <p className="">{card.heading}</p>
      <img
        src={card.imageUrl}
        alt={card.title}
        className="my-4 w-full rounded-lg"
      />
      <p className="">{card.description}</p>
      <CustomContainer className="mt-4 underline">
        visit :
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          {card.link}
        </a>
      </CustomContainer>
    </div>
  );
};

export default CardDetailPage;
