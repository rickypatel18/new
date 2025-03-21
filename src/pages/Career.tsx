import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import CareerSquareUp from "@/components/common/career/CareerSquareUp";

const Career = () => {
  const values = {
    title: "Join Our Team at SquareUp",
    description:
      "Unlock your potential and join our team of innovators and problem solvers.",
    image: img1,
  };

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
      <CareerSquareUp/>
    </div>
  );
};

export default Career;
