import SubConatainer from "@/components/custom/SubConatainer";
import WorkSquareCard from "./WorkSquareCard";
import BelowBanner from "@/components/custom/BelowBanner";


const WorkSquareUp = () => {
  const data = {
    title: "At SquareUp",
    description:
      "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.",
    ccValue: "Here are ten examples of our notable works:",
    hide:false
  };

  const belowBannerValue = {
    title: "Let us Bring your Ideas to Life in the Digital World.",
    description:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
  };

  const cardData = [
    {
      heading: "E-Commerce Platform for Fashion Hub",
      title: "Chic Boutique",
      link: "https://www.chicboutique.com",
      description:
        "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
    },
    {
      heading: "Mobile App for Food Delivery Service",
      title: "HungryBites",
      link: "https://www.hungrybites.com",
      description:
        "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
    },
    {
      heading: "Booking and Reservation System for Event Management",
      title: "EventMasters",
      link: "https://www.eventmasters.com",
      description:
        "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
    },
    {
      heading: "Custom Software for Workflow Automation",
      title: "ProTech Solutions",
      link: "https://www.protechsolutions.com",
      description:
        "ProTech Solutions needed workflow automation software to optimize operations. We developed a robust system that increased efficiency and reduced manual tasks.",
    },
    {
      heading: "Web Portal for Real Estate Listings",
      title: "Dream Homes Realty",
      link: "https://www.dreamhomesrealty.com",
      description:
        "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
    },
  ];

  return (
    <div className="flex flex-col container lg:px-0 border border-[var(--color-background)] pt-10 md:pt-15 lg:pt-20 xl:pt-30 gap-8 lg:gap-10 xl:gap-12">
      <SubConatainer data={data} />
      <WorkSquareCard cardData={cardData} />
      <BelowBanner
        title={belowBannerValue.title}
        description={belowBannerValue.description}
      />
    </div>
  );
};

export default WorkSquareUp;
