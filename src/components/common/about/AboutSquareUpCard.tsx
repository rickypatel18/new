import bg from "../../../assets/images/bg/Bg-Design.png";
import img from "../../../assets/images/banner/b6.png";
import PageLogo from "../logo/PageLogo";
// import "../../../assets/css/about.css"

const AboutSquareUpCard = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-7 md:gap-12 lg:gap-20 xl:gap-25 py-10 md:py-15 md:px-10 lg:py-20 lg:px-25 xl:py-25 xl:px-35 ">
      <div className="flex flex-col px-2 md:px-4 lg:px-0 gap-5">
        <h2 className="h2 !text-start">About SquareUp</h2>
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
        className="container h-[315px] sm:h-[391px] lg:h-[433px]  xl:h-[520px] !mx-0
             bg-[length:30px_20px,100%_100%]  
             lg:bg-[length:30px_20px,100%_100%] 
             xl:bg-[length:30px_20px,100%_100%] 
             bg-repeat border border-[var(--color-border)] 
             flex rounded-2xl relative "
        style={{
          backgroundImage: `url(${bg}), url(${img})`,
        }}
      >
        <div className="absolute w-[50%] top-[50%] left-0 before:content-[''] before:absolute before:w-full before:h-[4px] before:top-1/2 before:left-0 before:-translate-y-3/4 before:bg-gradient-to-l before:from-[#9eff00] before:via-[#9eff00bb] before:to-transparent"></div>

        <div className="absolute w-[50%] top-[50%] right-0 before:content-[''] before:absolute before:w-full before:h-[4px] before:top-1/2 before:left-0 before:-translate-y-3/4 before:bg-gradient-to-l before:from-trasparent before:via-[#9eff00bb] before:to-[#9eff00]"></div>

        <div className="absolute w-full h-full after:content-[''] after:absolute after:w-[4px] after:h-1/2 after:top-1/4 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gradient-to-b after:from-transparent after:via-[#9eff00bb] after:to-[#9eff00]"></div>

        <div className="absolute w-full h-full after:content-[''] after:absolute after:w-[4px] after:h-1/2 after:-bottom-1/4 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-gradient-to-b after:from-[#9eff00] after:via-[#9eff00bb] after:to-transparent"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PageLogo hide={true}></PageLogo>
        </div>
      </div>
    </div>
  );
};

export default AboutSquareUpCard;
