import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import AboutSquareUp from "@/components/common/about/AboutSquareUp";

const About = () => {
  const values = {
    title: "About Us",
    description:
      "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
    image: img1,
  };

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
     <AboutSquareUp/>
    </div>
  );
};

export default About;
