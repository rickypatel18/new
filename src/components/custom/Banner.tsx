// import img1 from "../../assets/images/service-banner/services-banner.png";
import bg from "../../assets/images/bg/Bg-Design.png";

interface BannerProps {
  title: string;
  description: string;
  // bgImage: string;
  overlayImage: string;
}

const Banner = ({
  title,
  description,
  // bgImage = bg,
  overlayImage,
}: BannerProps) => {
  return (
    <div
      className="container h-[190px] lg:h-[280px] xl:h-[336px] bg-[length:30px_20px,100%_300px] lg:bg-[length:30px_20px,100%_402px] xl:bg-[length:30px_20px,100%_448px] bg-center bg-repeat border border-[var(--color-border)] flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg}), url(${overlayImage})`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "left top, bottom",
      }}
    >
      <div className="flex flex-col  w-[300px] md:w-[500px] lg:w-[890px] xl:w-[1000px] text-center">
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
