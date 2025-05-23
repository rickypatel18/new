import img from "../../assets/images/services-icon/Icon (2).png"
import img1 from "../../assets/images/services-icon/Icon (3).png";
import img2 from "../../assets/images/banner/b1.png";
import Banner from "@/components/custom/Banner";
import BelowBanner from "@/components/custom/BelowBanner";
import Service from "./Service";

const mainCard = [
  {
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand.",
    customcontainervalue: "Our design services include:",
    headings: [
      {
        value: "User Experience (UX) Design",
        items: [
          {
            imageUrl: img,
            heading: "User Research and Persona Development",
          },
          {
            imageUrl: img1,
            heading: "Information Architecture and Wireframing",
          },
          {
            imageUrl: img,
            heading: "User Research and Persona Development",
          },
          {
            imageUrl: img,
            heading: "Information Architecture and Wireframing",
          },
        ],
      },
      {
        value: "User Interface (UI) Design",
        items: [
          {
            imageUrl: img,
            heading: "Visual Branding & Identity",
          },
          {
            imageUrl: img,
            heading: "Interactive Prototyping",
          },
          {
            imageUrl: img,
            heading: "Visual Branding & Identity",
          },
          {
            imageUrl: img,
            heading: "Interactive Prototyping",
          },
        ],
      },
      {
        value: "Graphic Design",
        items: [
          {
            imageUrl: img,
            heading: "Logo Design & Brand Identity",
          },
          {
            imageUrl: img,
            heading: "Marketing Collateral",
          },
          {
            imageUrl: img,
            heading: "Logo Design & Brand Identity",
          },
          {
            imageUrl: img,
            heading: "Marketing Collateral",
          },
        ],
      },
    ],
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions.",
    customcontainervalue: "Our engineering services include:",
    headings: [
      {
        value: "Software Development",
        items: [
          {
            imageUrl: img,
            heading: "Backend Development",
          },
          {
            imageUrl: img,
            heading: "Frontend Development",
          },
          {
            imageUrl: img,
            heading: "Backend Development",
          },
          {
            imageUrl: img,
            heading: "Frontend Development",
          },
        ],
      },
      {
        value: "Cloud & DevOps",
        items: [
          {
            imageUrl: img,
            heading: "Cloud Infrastructure Setup",
          },
          {
            imageUrl: img,
            heading: "CI/CD Pipelines",
          },
          {
            imageUrl: img,
            heading: "Cloud Infrastructure Setup",
          },
          {
            imageUrl: img,
            heading: "CI/CD Pipelines",
          },
        ],
      },
      {
        value: "Quality Assurance",
        items: [
          {
            imageUrl: img,
            heading: "Automated Testing",
          },
          {
            imageUrl: img,
            heading: "Performance Optimization",
          },
          {
            imageUrl: img,
            heading: "Automated Testing",
          },
          {
            imageUrl: img,
            heading: "Performance Optimization",
          },
        ],
      },
    ],
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications.",
    customcontainervalue: "Our project management services include:",
    headings: [
      {
        value: "Agile & Scrum",
        items: [
          {
            imageUrl: img,
            heading: "Agile Coaching",
          },
          {
            imageUrl: img,
            heading: "Scrum Mastery",
          },
          {
            imageUrl: img,
            heading: "Agile Coaching",
          },
          {
            imageUrl: img,
            heading: "Scrum Mastery",
          },
        ],
      },
      {
        value: "Risk & Resource Management",
        items: [
          {
            imageUrl: img,
            heading: "Risk Assessment",
          },
          {
            imageUrl: img,
            heading: "Budget Planning",
          },
          {
            imageUrl: img,
            heading: "Risk Assessment",
          },
          {
            imageUrl: img,
            heading: "Budget Planning",
          },
        ],
      },
      {
        value: "Project Delivery",
        items: [
          {
            imageUrl: img,
            heading: "Stakeholder Communication",
          },
          {
            imageUrl: img,
            heading: "On-time Delivery",
          },
          {
            imageUrl: img,
            heading: "Stakeholder Communication",
          },
          {
            imageUrl: img,
            heading: "On-time Delivery",
          },
        ],
      },
    ],
  },
];

const values = [
  {
    title: "Our Services",
    description:
      "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
    image: img2,
  },
];

const BelowBannerValue = [
  {
    title: "Let us Bring your Ideas to Life in the Digital World.",
    description:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
  },
];

const ServiceCards = () => {
  return (
    <div className="flex flex-col gap-12">
      <Banner
        title={values[0]?.title}
        description={values[0]?.description}
        overlayImage={values[0]?.image}
      />
      {mainCard.map((service, index) => (
        <Service key={index} data={service} />
      ))}
      <BelowBanner
        title={BelowBannerValue[0]?.title}
        description={BelowBannerValue[0]?.description}
      />
    </div>
  );
};

export default ServiceCards;
