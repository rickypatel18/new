import img1 from "../../assets/images/bg/Bg-Design.png";
import img2 from "../../assets/images/studio-banner/Abstract Design.png";
import CustomButton from "../custom/CustomButton";

const StudioBanner = () => {
  return (
    <div
      className=" h-[566px] lg:h-[691px] xl:h-[796px] pt-[80px] lg:pt-[112px] bg-[length:30px_20px,100%_300px] lg:bg-[length:30px_20px,100%_402px] xl:bg-[length:30px_20px,100%_448px] flex justify-center items-start border border-[var(--color-border)]"
      style={{
        backgroundImage: `url(${img1}), url(${img2})`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "left top, bottom",
      }}
    >
      <div className="gap-[30px] lg:gap-[40px] xl:gap-[50px] flex flex-col items-center justify-center text-center  lg:w-[735px] xl:w-[880px]">
        <div className="">
          <h1 className="text-[34px] lg:[48px] xl:text-[68px] font-semibold leading-[1.3]">
            A Digital Product Studio that will Work
          </h1>
        </div>
        <div className="py-[18px] px-[20px] lg:py-[20px] lg:px-[25px] xl:py-[24px] xl:px-[35px] gap-[6px] rounded-[12px] border border-[var(--color-background)] bg-[#2424248a]  ">
          <div className="text-[16px] lg:text-[18px] xl:text-[22px] font-[400]  ">
            <span className="lg:text-[var(--color-text-gray)]">For</span>{" "}
            <span className="lg:bg-[var(--color-background)] lg:py-[12px] lg:px-[14px] lg:rounded-[8px]">
              Startups
            </span>{" "}
            <span className="lg:text-[var(--color-text-gray)]">,</span>{" "}
            <span className="lg:bg-[var(--color-background)] lg:py-[12px] lg:px-[14px] lg:rounded-[8px]">
              Enterprise leaders
            </span>{" "}
            <span className="lg:text-[var(--color-text-gray)]">,</span>{" "}
            <span className="lg:bg-[var(--color-background)] lg:py-[12px] lg:px-[14px] lg:rounded-[8px]">
              Media & Publishers
            </span>{" "}
            <span className="lg:text-[var(--color-text-gray)]">and</span>{" "}
            <span className="lg:bg-[var(--color-background)] lg:py-[12px] lg:px-[14px] lg:rounded-[8px]">
              Social Good
            </span>
          </div>
        </div>
        <div className="flex gap-[13px]">
          <CustomButton
            text="Our Works"
            textSize="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
            bgColor="bg-[#333333]"
            hoverBgColor="hover:bg-[var(--color-background)]"
            hoverTextColor="hover:text-[var(--color-text-primary)]"
          />
          <CustomButton
            text="Contact Us"
            textSize="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
            textColor="text-[var(--color-background)]"
          />
        </div>
      </div>
    </div>
  );
};

export default StudioBanner;
