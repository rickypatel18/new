import CustomContainer from "@/components/custom/CustomContainer";
import SquareCard from "./SquareCard";
import BelowBanner from "@/components/custom/BelowBanner";

const SquareUp = () => {
  const BelowBannerValue = [
    {
      title: "Let us Bring your Ideas to Life in the Digital World.",
      description:
        "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
    },
  ];

  const cardData = [
    {
      heading: "E-Commerce Platform for Fashion Hub",
      title: "Chic Boutique",
      link: "htttps:/www.chicboutique.com",
      description:
        "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
    },
    {
      heading: "Mobile App for Food Delivery Service",
      title: "HungryBites",
      link: "htttps:/www.hungrybites.com",
      description:
        "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
    },
    {
      heading: "Booking and Reservation System for Event Management",
      title: "EventMasters",
      link: "htttps:/www.eventmasters.com",
      description:
        "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
    },
    {
      heading: "Custom Software for Workflow Automation",
      title: "ProTech Solutions",
      link: "htttps:/www.protechsolutions.com",
      description:
        "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
    },
    {
      heading: "Web Portal for Real Estate Listings",
      title: "Dream Homes Realty",
      link: "htttps:/www.dreamhomesrealty.com",
      description:
        "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
    },
    {
      heading: "Mobile App for Fitness Tracking",
      title: "FitLife Tracker",
      link: "htttps:/www.fitlifetracker.com",
      description:
        "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
    },
    {
      heading: "Custom Software for Supply Chain Management",
      title: "Global Logistics Solutions",
      link: "htttps:/www.globallogisticssolutions.com",
      description:
        "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
    },
    {
      heading: "Educational Platform for Online Learning",
      title: "EduConnect",
      link: "htttps:/www.educonnect.com",
      description:
        "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
    },
    {
      heading: "Mobile App for Travel Planning",
      title: "WanderWise",
      link: "htttps:/www.wanderwise.com",
      description:
        "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
    },
    {
      heading: "Web Application for Customer Relationship Management",
      title: "ConnectCRM",
      link: "htttps:/www.connectcrm.com",
      description:
        "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
    },
  ];

  return (
    <div className="flex flex-col container lg:px-0 border border-[var(--color-background)] pt-10 md:pt-15 lg:pt-20 xl:pt-30 gap-8 lg:gap-10 xl:gap-12">
      <div className="flex flex-col px-4 md:px-6 lg:px-10 xl:px-12 gap-7 md:gap-8 lg:gap-10 xl:gap-12">
        <div className="gap-2 lg:gap-3 xl:gap-4">
          <h2 className="h2-start">At SquareUp</h2>
          <p className="service-description">
            We have had the privilege of working with a diverse range of clients
            and delivering exceptional digital products that drive success.
          </p>
        </div>
        <div className="custom-container-22 flex justify-center  md:justify-start">
          <CustomContainer>
            Here are ten examples of our notable works:
          </CustomContainer>
        </div>
      </div>
      {/* map */}
      <div>
        <SquareCard />
      </div>
      <div>
        <BelowBanner
          title={BelowBannerValue[0]?.title}
          description={BelowBannerValue[0]?.description}
        />
      </div>
    </div>
  );
};

export default SquareUp;
