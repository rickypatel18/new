import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import BelowBanner from "@/components/custom/BelowBanner";
import Cards from "@/components/common/service/cards/Cards";

const Services = () => {
  const values = [
    {
      title: "Our Services",
      description:
        "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
      image: img1,
    },
  ];
  const BelowBannerValue = [
    {
      title: "Let us Bring your Ideas to Life in the Digital World.",
      description:
        "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
    },
  ];

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values[0]?.title}
        description={values[0]?.description}
        overlayImage={values[0]?.image}
      />
      <Cards />
      <BelowBanner
        title={BelowBannerValue[0]?.title}
        description={BelowBannerValue[0]?.description}
      />
    </div>
  );
};

export default Services;
