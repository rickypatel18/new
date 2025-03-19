
import bg from "../../assets/images/bg/Bg-Design.png";
import "../../assets/css/banner.css";

interface BannerProps {
  title: string;
  description: string;
  overlayImage?: string;
}

const Banner = ({
  title,
  description,
  overlayImage,
}: BannerProps) => {
  return (
    <div
      className="max-w-container banner h-[190px] lg:h-[280px] xl:h-[336px] bg-[length:30px_20px,100%_100%] lg:bg-[length:30px_20px,100%_100%] xl:bg-[length:30px_20px,100%_100%] bg-center bg-repeat border border-[var(--color-border)] flex justify-center items-center filter hue-rotate-[248deg] sepia-[73%] saturate-[143%] brightness-[100%] grayscale-[68%]  "
      style={{
        backgroundImage: `url(${bg}), url(${overlayImage})`,
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
