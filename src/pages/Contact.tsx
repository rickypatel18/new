import Banner from "@/components/custom/Banner";
import img1 from "../assets/images/banner/b1.png";
import ContactSquareup from "@/components/common/contact/ContactSquareup";

const Contact = () => {
  const values = {
    title: "Contact Us",
    description:
      "Get in touch with us today and let us help you with any questions or inquiries you may have.",
    image: img1,
  };

  return (
    <div className="flex flex-col container px-4 lg:px-0">
      <Banner
        title={values?.title}
        description={values?.description}
        overlayImage={values?.image}
      />
      <ContactSquareup/>
    </div>
  );
};

export default Contact;
