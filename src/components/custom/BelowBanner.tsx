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
      className="container relative p-2 h-[425px] lg:h-[483px] xl:h-[597px] flex justify-center items-center z-[1] "
      // filter grayscale opacity-100 invert-[1%] brightness-110 saturate-[123%] sepia-[16%]
    >
      <div
        className="bg-blend-overlay bg-[#ACFF24]/20 absolute size-full opacity-60 -z-[1] bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${img1}), url(${bg})`,
          backgroundSize: "cover",
          mixBlendMode: "overlay",
          backgroundColor: "rgb(172 255 36 / 50%)",
          opacity: "0.1",
          backgroundBlendMode: "luminosity",
        }}
      ></div>
      <div className="flex gap-5 md:gap-8 lg:gap-10 xl:gap-12 flex-col items-center justify-center w-[280px] md:w-[500px] lg:w-[890px] xl:w-[1000px] text-center">
        <Logo hide={true} />
        <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4">
          <h2 className="text-[24px] md:text-[28px] lg:text-[30px] xl:text-[38px] font-semibold text-white leading-tight">
            {title}
          </h2>
          <p className="h3-p !text-center">{description}</p>
        </div>
        <CustomButton
          to="/project"
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
