import BelowBanner from "@/components/custom/BelowBanner";
import SubConatainer from "@/components/custom/SubConatainer";
import SquareCard from "../squareCard/SquareCard";
import Banner from "@/components/custom/Banner";
import img1 from "../../../assets/images/banner/b1.png";

const ProcessSquareUp = () => {
  const cardData = [
    {
      title: "01",
      heading: "Discovery ",
      description:
        "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "02",
      heading: "Planning and Strategy",
      description:
        "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.",
    },
    {
      title: "03",
      heading: "Design",
      description:
        "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.",
    },
    {
      title: "04",
      heading: "Development",
      description:
        "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.",
    },
    {
      title: "05",
      heading: "Testing and Quality Assurance",
      description:
        "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.",
    },
    {
      title: "06",
      heading: "Deployment and Launch",
      description:
        "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.",
    },
    {
      title: "07",
      heading: "Post-Launch Support",
      description:
        "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.",
    },
    {
      title: "08",
      heading: "Continuous Improvement",
      description:
        "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.",
    },
  ];

  const data = {
    title: "At SquareUp",
    description:
      "We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.",
    ccValue: "Here's an overview of our typical process:",
    hide: false,
  };

  const BelowBannerValue = {
    title: "Let us Bring your Ideas to Life in the Digital World.",
    description:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
  };
  const values = {
    title: "Process of Starting the Project",
    description:
      "At SquareUp, we value transparency, collaboration, and delivering exceptional results.",
    image: img1,
  };
  return (
    <div className="flex flex-col">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
      <div className="flex flex-col container lg:px-0 border border-[var(--color-background)] pt-10 md:pt-15 lg:pt-20 xl:pt-30 gap-8 lg:gap-10 xl:gap-12">
        <SubConatainer data={data} />
        <SquareCard cardData={cardData} headingColor="text-[#98989A]" />
        <BelowBanner
          title={BelowBannerValue?.title}
          description={BelowBannerValue?.description}
        />
      </div>
    </div>
  );
};

export default ProcessSquareUp;
