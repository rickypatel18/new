import Companies from "@/components/common/home/Companies";
import Banner from "@/components/custom/Banner";
import StudioBanner from "@/components/common/home/StudioBanner";
import img1 from "../assets/images/banner/b1.png";
import img2 from "../assets/images/banner/b2.png";
import img3 from "../assets/images/banner/b3.png";
import img4 from "../assets/images/banner/b4.png";
import Services from "@/components/common/home/Services";
import ChooseUs from "@/components/common/home/ChooseUs";
import ClientSay from "@/components/common/home/ClientSay";
import Faq from "@/components/common/home/Faq";
import Form from "@/components/common/home/Form";
import BelowBanner from "@/components/custom/BelowBanner";

const Home = () => {
  const BannerValues = [
    {
      title: "Our Services",
      description:
        "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
      image: img1,
    },
    {
      title: "Why Choose SquareUp?",
      description:
        "Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.",
      image: img2,
    },
    {
      title: "What our Clients say About us",
      description:
        "At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us",
      image: img3,
    },
    {
      title: "Frequently Asked Questions",
      description:
        "Still you have any questions? Contact our Team via hello@squareup.com",
      image: img4,
    },
  ];
  const BelowBannerValue = [
    {
      title: "Thank you for your Interest in SquareUp.",
      description:
        "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.",
    },
  ];
  return (
    <div className="flex flex-col container  px-4 lg:px-0">
      <StudioBanner />
      <Companies />
      <Banner
        title={BannerValues[0]?.title}
        description={BannerValues[0]?.description}
        overlayImage={BannerValues[0]?.image}
      />
      <Services />
      <Banner
        title={BannerValues[1]?.title}
        description={BannerValues[1]?.description}
        overlayImage={BannerValues[1]?.image}
      />
      <ChooseUs />
      <Banner
        title={BannerValues[2]?.title}
        description={BannerValues[2]?.description}
        overlayImage={BannerValues[2]?.image}
      />
      <ClientSay />
      <Banner
        title={BannerValues[3]?.title}
        description={BannerValues[3]?.description}
        overlayImage={BannerValues[3]?.image}
      />
      <Faq />
      <BelowBanner
        title={BelowBannerValue[0]?.title}
        description={BelowBannerValue[0]?.description}
      />
      <Form />
    </div>
  );
};

export default Home;
