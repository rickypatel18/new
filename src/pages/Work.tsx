import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import WorkSquareUp from "@/components/common/work/WorkSquareUp";

const Work = () => {
  const values = {
    title: "Our Works",
    description:
      "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
    image: img1,
  };

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
      <WorkSquareUp />
    </div>
  );
};

export default Work;
