import Companies from "@/components/common/Companies";
import Banner from "@/components/custom/Banner";
import StudioBanner from "@/components/common/StudioBanner";
import img1 from "../assets/images/service-banner/services-banner.png";
import Services from "@/components/common/Services";
import ChooseUs from "@/components/common/ChooseUs";
import ClientSay from "@/components/common/ClientSay";
import Faq from "@/components/common/Faq";

const Home = () => {
  const values = [
    {
      title: "Our Services",
      description:
        "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
    },
    {
      title: "Why Choose SquareUp?",
      description:
        "Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.",
    },
    {
      title: "What our Clients say About us",
      description:
        "At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us",
    },
    {
      title: "Frequently Asked Questions",
      description:
        "Still you have any questions? Contact our Team via hello@squareup.com",
    },
  ];

  return (
    <div className="flex flex-col container">
      <StudioBanner />
      <Companies />
      <Banner
        title={values[0]?.title}
        description={values[0]?.description}
        overlayImage={img1}
      />
      <Services />
      <Banner
        title={values[1]?.title}
        description={values[1]?.description}
        overlayImage={img1}
      />
      <ChooseUs/>
      <Banner
        title={values[2]?.title}
        description={values[2]?.description}
        overlayImage={img1}
      />
      <ClientSay/>
      <Banner
        title={values[3]?.title}
        description={values[3]?.description}
        overlayImage={img1}
      />
      <Faq/>
    </div>
  );
};

export default Home;
