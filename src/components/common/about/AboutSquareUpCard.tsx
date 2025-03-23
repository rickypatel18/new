import bg from "../../../assets/images/bg/Bg-Design.png";
import img from "../../../assets/images/banner/b6.png";
import PageLogo from "../logo/PageLogo";

const AboutSquareUpCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-7 md:gap-12 lg:gap-20 xl:gap-25  md:py-15 md:px-10 lg:py-20 lg:px-25 xl:py-25 xl:px-35 ">
      <div className="flex flex-col px-2 md:px-4 lg:px-0 gap-5">
        <h1 className="h2 !text-start">About SquareUp</h1>
        <p className="service-title !font-[400]">
          SquareUp is a digital product agency that is passionate about crafting
          exceptional digital experiences. We specialize in design, engineering,
          and project management, helping businesses thrive in the digital
          landscape. At SquareUp, we follow a structured and collaborative
          process to ensure the successful delivery of exceptional digital
          products. Our process combines industry best practices, creative
          thinking, and a client-centric approach.
        </p>
      </div>

      <div
        className="container h-[391px] lg:h-[483px] xl:h-[597px] !mx-0
             bg-[length:30px_20px,100%_100%]  
             lg:bg-[length:30px_20px,100%_100%] 
             xl:bg-[length:30px_20px,100%_100%] 
             bg-repeat border border-[var(--color-border)] 
             flex justify-center items-center rounded-2xl"
        style={{
          backgroundImage: `url(${bg}), url(${img})`,
        }}
      >
        <PageLogo hide={true}></PageLogo>
      </div>
    </div>
  );
};

export default AboutSquareUpCard;
