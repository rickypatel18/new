interface CardProps {
  cardData: {
    title: string;
    heading: string;
    description: string;
  }[];
  headingColor?: string;
}
// npm install clsx
// use conditional merging with clsx or classnames
// but we are not using here

const SquareCard = ({ cardData, headingColor }: CardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col border gap-5 lg:gap-7 border-[var(--color-background)] py-10 px-4 md:py-15 md:px-8 lg:py-20 lg:px-10 xl:py-25 xl:px-12"
        >
          <div className="flex h-fit gap-3 p-0 items-end">
            <h3 className="process-title-135px ">{card.title}</h3>
            {/* <p className={clsx("process-heading-30px", headingColor)}> */}
            <p className={`process-heading-30px ${headingColor}`}>
              {card.heading}
            </p>
          </div>
          <div className="process-description-18px">
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SquareCard;
