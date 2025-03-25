import bg from "../../assets/images/bg/Bg-Design.png";
import "../../assets/css/banner.css";

interface BannerProps {
  title: string;
  description: string;
  overlayImage?: string;
}

const Banner = ({ title, description, overlayImage }: BannerProps) => {
  return (
    <div className="max-w-container banner relative z-[1] h-[250px] lg:h-[280px] xl:h-[336px] flex justify-center items-center">
      <div
        className="bg-blend-overlay bg-[#ACFF24]/20 absolute size-full opacity-60 -z-[1] bg-no-repeat  bg-center"
        style={{
          backgroundImage: `url(${overlayImage}), url(${bg})`,
          backgroundSize: "cover",
          mixBlendMode: "overlay",
          backgroundColor: "rgb(172 255 36 / 50%)",
          opacity: "0.1",
          backgroundBlendMode: "luminosity",
        }}
      ></div>
      <div className="flex flex-col w-[300px] md:w-[500px] lg:w-[890px] xl:w-[1000px] text-center">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-semibold text-white">
          {title}
        </h2>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-gray-300 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
