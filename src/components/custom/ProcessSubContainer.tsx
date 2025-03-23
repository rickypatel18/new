import CustomContainer from "./CustomContainer";

interface CardData {
  title: string;
  heading: string;
  description: string;
}

const ProcessSubContainer = ({ cardData }: { cardData: CardData }) => {
  return (
    <div className="flex flex-col px-4 md:px-6 lg:px-10 xl:px-12 gap-7 md:gap-8 lg:gap-10 xl:gap-12">
      <div className="gap-2 lg:gap-3 xl:gap-4">
        <h2 className="h2-start">{cardData.title}</h2>
        <p className="service-description">{cardData.description}</p>
      </div>
      <div className="custom-container-22 flex justify-center  md:justify-start">
        <CustomContainer>{cardData.heading}</CustomContainer>
      </div>
    </div>
  );
};

export default ProcessSubContainer;
