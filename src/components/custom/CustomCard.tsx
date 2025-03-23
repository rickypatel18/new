interface Heading {
  value: string;
  items: {
    imageUrl: string;
    heading: string;
  }[];
}

const CustomCard = ({ heading }: { heading: Heading }) => {
  return (
    <div className="flex flex-col gap-12 border border-[var(--color-border)] pt-5 md:pt-7 lg:pt-10 xl:pt-12">
      <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12">
        <div className="lg:pl-10 xl:pl-12 h3-28">
          <p className="text-center lg:text-start">{heading.value}</p>
        </div>
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {heading.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-5 md:p-7 lg:p-10 xl:p-12 border border-[var(--color-border)]"
            >
              <div className="flex flex-col gap-5 lg:gap-6 xl:gap-7 items-start">
                {/* Image */}
                <div className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] xl:h-[88px] xl:w-[88px] rounded-[12px] flex justify-center items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.heading}
                    className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10"
                  />
                </div>
                {/* Heading */}
                <div>
                  <h3 className="service-title">{item.heading}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
