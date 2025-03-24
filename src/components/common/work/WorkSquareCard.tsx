import CustomContainer from "@/components/custom/CustomContainer";
import { ImArrowUpRight2 } from "react-icons/im";
import img from "../../../assets/images/work/Image.png";

interface CardProps {
  cardData: {
    heading: string;
    title: string;
    link: string;
    description: string;
  }[];
}

const WorkSquareCard = ({ cardData }: CardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col border gap-5 lg:gap-7 border-[var(--color-background)] pb-10 md:pb-15 lg:pb-20 xl:pb-25"
        >
          <div className=" py-4 lg:py-5 xl:py-6 work-26 border-b border-[var(--color-background)]">
            <p className="px-4 md:px-6 lg:px-8 xl:px-10">{card.heading}</p>
          </div>
          <div className="px-4 md:px-6 lg:px-8 xl:px-10 gap-4 md:gap-5 lg:gap-6 xl:gap-7 flex flex-col">
            <div>
              <img src={img} alt={card.title} />
            </div>
            <div className="flex justify-between items-end lg:items-center">
              <div className="flex flex-col gap-2 lg:gap-3">
                <h3 className="work-heading-24">{card.title}</h3>
                <CustomContainer className="work-title-20">
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    {card.link}
                  </a>
                </CustomContainer>
              </div>
              <div>
                <CustomContainer className="!px-3 !py-3">
                  <ImArrowUpRight2 className="text-[var(--color-primary)] text-md lg:text-lg xl:text-xl" />
                </CustomContainer>
              </div>
            </div>
            <div className="work-description">
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSquareCard;
