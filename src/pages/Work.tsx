import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import SquareUp from "@/components/common/work/SquareUp";

const Work = () => {
  const values = [
    {
      title: "Our Works",
      description:
        "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
      image: img1,
    },
  ];

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values[0]?.title}
        description={values[0]?.description}
        overlayImage={values[0]?.image}
      />
      <SquareUp/>
    </div>
  );
};

export default Work;
