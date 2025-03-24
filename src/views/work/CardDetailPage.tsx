import { useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/work/Image.png";
import CustomContainer from "@/components/custom/CustomContainer";

const CardDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state?.card; // Get card data from state

  if (!card) return <p className="text-center text-red-500">Card not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold">{card.title}</h2>
      <p className="text-gray-600">{card.heading}</p>

      <img src={img} alt={card.title} className="my-4 w-full rounded-lg" />

      <p className="text-gray-800">{card.description}</p>

      <CustomContainer className="mt-4 text-blue-500 underline">
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          Visit: {card.link}
        </a>
      </CustomContainer>
    </div>
  );
};

export default CardDetailPage;
