import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import ProcessSquareUp from "@/components/common/process/ProcessSquareUp";

const Process = () => {
  const values = {
    title: "Process of Starting the Project",
    description:
      "At SquareUp, we value transparency, collaboration, and delivering exceptional results.",
    image: img1,
  };

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
      <ProcessSquareUp/>
    </div>
  );
};

export default Process;
