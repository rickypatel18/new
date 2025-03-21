import CustomContainer from "./CustomContainer";

interface Data {
  title: string;
  description: string;
  ccValue: string;
  hide: boolean;
}

const SubConatainer = ({ data }: { data: Data }) => {
  return (
    <div className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-10 xl:px-12 gap-7 md:gap-8 lg:gap-10 xl:gap-12 ">
      <div className="gap-2 lg:gap-3 xl:gap-4">
        <h2 className="h2-start">{data.title}</h2>
        <p className="service-description">{data.description}</p>
      </div>
      <div className="custom-container-22 flex justify-center  md:justify-start">
        <CustomContainer className={data.hide ? "hidden" : ""}>
          {data.ccValue}
        </CustomContainer>
      </div>
    </div>
  );
};

export default SubConatainer;
