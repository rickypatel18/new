import CustomContainer from "@/components/custom/CustomContainer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Form from "../../components/common/form/Form";
import Media from "../../components/common/media/Media";
import img1 from "../../assets/images/banner/b1.png";
import Banner from "@/components/custom/Banner";
import Faq from "../../components/common/faq/Faq";
import BelowTextBanner from "@/components/custom/BelowTextBanner";

const ContactSquareup = () => {
  const values = {
    title: "Frequently Asked Questions",
    description:
      "Still you have any questions? Contact our Team via hello@squareup.com",
    image: img1,
  };
  const values1 = {
    title: "Contact Us",
    description:
      "Get in touch with us today and let us help you with any questions or inquiries you may have.",
    image: img1,
  };

  return (
    <div className="flex flex-col">
      <Banner
        title={values1?.title}
        description={values1?.description}
        overlayImage={values1?.image}
      />
      <div className="flex flex-col ">
        <div className="flex flex-col md:flex-row justify-center items-center px-4 py-7 md:py-8 lg:py-10 xl:py-12 gap-4 lg:gap-5 xl:gap-7 border border-[var(--color-background)]">
          <CustomContainer className="flex justify-center items-center w-full lg:w-fit">
            <div className="border-b border-[var(--color-background)] flex justify-center items-center py-3 md:py-5 lg:py-[0px] gap-[10px]">
              <IoMdMail className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] text-[var(--color-primary)] " />
              <p>hello@squareup.com</p>
            </div>
          </CustomContainer>
          <CustomContainer className="flex justify-center items-center w-full lg:w-fit">
            <div className="border-b border-[var(--color-background)] flex justify-center items-center py-3 md:py-5 lg:py-0 gap-2">
              <FaPhoneAlt className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] text-[var(--color-primary)] " />
              <p>+91 91813 23 2309</p>
            </div>
          </CustomContainer>
          <CustomContainer className="flex justify-center items-center w-full lg:w-fit">
            <div className="border-b border-[var(--color-background)] flex justify-center items-center py-3 md:py-5 lg:py-0 gap-2">
              <FaLocationDot className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] text-[var(--color-primary)] " />
              <p>Find Location</p>
            </div>
          </CustomContainer>
        </div>
        <div className="border border-[var(--color-background)]">
          <Form />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-12 lg:gap-20 border border-[var(--color-background)] items-center justify-center ">
          <div className="flex gap-3 py-5 lg:py-12 items-center justify-center  ">
            <p>Operating Days</p>
            <div>
              <CustomContainer className="flex justify-center items-center w-fit">
                Monday to Friday
              </CustomContainer>
            </div>
          </div>
          <div className=" flex  items-center justify-center">
            <Media />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <Banner
            title={values?.title}
            description={values?.description}
            overlayImage={values?.image}
          />
        </div>
        <div>
          <Faq />
        </div>
      </div>
      <div>
        <BelowTextBanner />
      </div>
    </div>
  );
};

export default ContactSquareup;
