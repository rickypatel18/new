import CustomCard from "@/components/custom/CustomCard";
import CustomContainer from "@/components/custom/CustomContainer";

interface Data {
  title: string;
  description: string;
  customcontainervalue: string;
  headings: {
    value: string;
    items: {
      imageUrl: string;
      heading: string;
    }[];
  }[];
}

const Service = ({ data }: { data: Data }) => {
  return (
    <div className="flex flex-col container lg:px-0 border border-[var(--color-border)] gap-8 lg:gap-10 xl:gap-12 pt-10 lg:pt-20 xl:pt-30">
      {/* Title & Description Section */}
      <div className="flex flex-col px-4 md:px-6 lg:px-10 xl:px-12 gap-7 md:gap-8 lg:gap-10 xl:gap-12">
        <div className="gap-2 lg:gap-3 xl:gap-4">
          <h2 className="h2-start">{data.title}</h2>
          <p className="service-description">{data.description}</p>
        </div>
        {/* Custom Container */}
        <div className="custom-container-22">
          <CustomContainer>{data.customcontainervalue}</CustomContainer>
        </div>
      </div>

      {/* Cards Section */}
      <div className="pt-12 gap-12">
        {data.headings.map((heading) => (
          <CustomCard key={heading.value} heading={heading} />
        ))}
      </div>
    </div>
  );
};

export default Service;
