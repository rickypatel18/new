import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import Service from "@/components/common/service/Service";
import BelowBanner from "@/components/custom/BelowBanner";

const Services = () => {
  const values = [
    {
      title: "Our Services",
      description:
        "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
      image: img1,
    },
  ];
  const ourService = [
    {
      id: 1,
      title: "Design",
      description:
        "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. ",
      customContainerValue: "Our design services include:",
    },
    {
      id: 2,
      title: "Engineering",
      description:
        "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
      customContainerValue: "Our engineering services include:",
    },
    {
      id: 3,
      title: "Project Management",
      description:
        "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
      customContainerValue: "Our project management services include:",
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
      {ourService.map((service) => (
        <Service
          key={service.id}
          title={service.title}
          description={service.description}
          customContainerValue={service.customContainerValue}
        />
      ))}
      <BelowBanner
        title={BelowBannerValue[0]?.title}
        description={BelowBannerValue[0]?.description}
      />
    </div>
  );
};

export default Services;
