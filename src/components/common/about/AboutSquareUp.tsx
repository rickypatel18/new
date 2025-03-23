import BelowTextBanner from "@/components/custom/BelowTextBanner";
import ProcessSquareCard from "../process/ProcessSquareCard";
import AboutSquareUpCard from "./AboutSquareUpCard";
import Banner from "@/components/custom/Banner";
import img1 from "../../../assets/images/banner/b1.png";

const AboutSquareUp = () => {
  const cardData = [
    {
      title: "01",
      heading: "Design ",
      description:
        "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
      title: "02",
      heading: "Engineering",
      description:
        "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },
    {
      title: "03",
      heading: "Project Management",
      description:
        "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
      title: "04",
      heading: "Collaboration",
      description:
        "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
    {
      title: "05",
      heading: "Client-Centric Approach",
      description:
        "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
      title: "06",
      heading: "Driving Success",
      description:
        "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    },
  ];

  const values = {
    title: "About Us",
    description:
      "Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.",
    image: img1,
  };

  return (
    <div className="flex flex-col container  ">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
      <AboutSquareUpCard />
      <div className="flex flex-col container  pt-10 md:pt-15 lg:pt-20 xl:pt-25 gap-10 lg:gap-20 xl:gap-25 border border-[var(--color-background)]">
        <h1 className="px-2 sm:px-4 md:px-8 lg:px-12 gap-12 text-[38px] md:text-[42px] lg:text-[48px] xl:text-[58px] font-[600] ">
          Our Story
        </h1>
        <ProcessSquareCard cardData={cardData} headingColor="text-[#D8FF99]" />
      </div>
      <BelowTextBanner />
    </div>
  );
};

export default AboutSquareUp;
