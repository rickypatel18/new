import img1 from "../../assets/images/banner/b5.png";
import bg from "../../assets/images/bg/Bg-Design.png";
import Logo from "../common/logo/Logo";
import CustomButton from "./CustomButton";

interface BelowBannerProps {
  title: string;
  description: string;
}

const BelowBanner = ({ title, description }: BelowBannerProps) => {
  return (
    <div
      className="container p-1 h-[420px] lg:h-[483px] xl:h-[597px] 
             bg-[length:30px_20px,100%_100%] 
             lg:bg-[length:30px_20px,100%_100%] 
             xl:bg-[length:30px_20px,100%_100%] 
             bg-repeat  
             flex justify-center items-center "
      style={{
        backgroundImage: `url(${bg}), url(${img1})`,
      }}
      // filter grayscale opacity-100 invert-[1%] brightness-110 saturate-[123%] sepia-[16%]
    >
      <div className="flex gap-5 md:gap-8 lg:gap-10 xl:gap-12 flex-col items-center justify-center w-[280px] md:w-[500px] lg:w-[890px] xl:w-[1000px] text-center">
        <Logo hide={true} />
        <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
          <h2 className="text-[24px] md:text-[28px] lg:text-[30px] xl:text-[38px] font-semibold text-white leading-tight">
            {title}
          </h2>
          <p className="h3-p !text-center">{description}</p>
        </div>
        <CustomButton
          display="flex md:flex"
          text="Start Project"
          textSize="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
          textColor="text-[var(--color-background)]"
        />
      </div>
    </div>
  );
};

export default BelowBanner;
