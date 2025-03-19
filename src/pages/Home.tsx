import Companies from "@/components/common/Companies";
import Banner from "@/components/custom/Banner";
import StudioBanner from "@/components/common/StudioBanner";
import img1 from "../assets/images/banner/b1.png";
import img2 from "../assets/images/banner/b2.png";
import img3 from "../assets/images/banner/b3.png";
import img4 from "../assets/images/banner/b4.png";
import Services from "@/components/common/Services";
import ChooseUs from "@/components/common/ChooseUs";
import ClientSay from "@/components/common/ClientSay";
import Faq from "@/components/common/Faq";
import StartProject from "@/components/common/StartProject";
import Form from "@/components/common/Form";

const Home = () => {
  const values = [
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

  return (
    <div className="flex flex-col container  px-4 lg:px-0">
      <StudioBanner />
      <Companies />
      <Banner
        title={values[0]?.title}
        description={values[0]?.description}
        overlayImage={values[0]?.image}
      />
      <Services />
      <Banner
        title={values[1]?.title}
        description={values[1]?.description}
        overlayImage={values[1]?.image}
      />
      <ChooseUs />
      <Banner
        title={values[2]?.title}
        description={values[2]?.description}
        overlayImage={values[2]?.image}
      />
      <ClientSay />
      <Banner
        title={values[3]?.title}
        description={values[3]?.description}
        overlayImage={values[3]?.image}
      />
      <Faq />
      <StartProject />
      <Form />
    </div>
  );
};

export default Home;
