import img1 from "../../../assets/images/banner/b5.png";
import bg from "../../../assets/images/bg/Bg-Design.png";
import Logo from "../../components/common/logo/Logo";
import CustomButton from "../../components/custom/CustomButton";

const StartProject = () => {
  return (
    <div
      className="container h-[391px] lg:h-[483px] xl:h-[597px] 
             bg-[length:30px_20px,100%_100%] 
             lg:bg-[length:30px_20px,100%_100%] 
             xl:bg-[length:30px_20px,100%_100%] 
             bg-repeat border border-[var(--color-border)] 
             flex justify-center items-center filter hue-rotate-[248deg] sepia-[73%] saturate-[143%] brightness-[100%] grayscale-[68%] "
      style={{
        backgroundImage: `url(${bg}), url(${img1})`,
      }}
      // filter grayscale opacity-100 invert-[1%] brightness-110 saturate-[123%] sepia-[16%]
    >
      <div className="flex gap-6 md:gap-8 lg:gap-10 xl:gap-12 flex-col items-center justify-center w-[280px] md:w-[500px] lg:w-[890px] xl:w-[1000px] text-center">
        <Logo hide={true} />
        <h2 className="text-[24px] md:text-[28px] lg:text-[30px] xl:text-[38px] font-semibold text-white leading-tight">
          Thank you for your Interest in SquareUp.
        </h2>
        <p className="h3-p !text-center">
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
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

export default StartProject;
