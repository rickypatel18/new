import PageLogo from "../common/logo/PageLogo";
import CustomButton from "./CustomButton";
import CustomContainer from "./CustomContainer";

const BelowTextBanner = () => {
  return (
    <div className="flex flex-col container py-10 px-4 md:px-8 lg:p-15 xl:p-20 gap-7 lg:gap-10 xl:gap-12 border border-[var(--color-background)]">
      <div className="flex flex-col items-center p-0 lg:flex-row gap-6 lg:gap-8 xl:gap-10 ">
        <PageLogo hide={true} />
        <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5  ">
          <p className="text-banner-p1">
            Today, SquareUp Continues to Thrive as a Leading Digital Product
            Agency.....
          </p>
          <p className="text-banner-p2">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center py-4 px-2 sm:px-4 lg:py-5 lg:px-7 xl:py-6 gap-5 lg:gap-5 xl:px-10 xl:gap-5 bg-[#24242433] rounded-xl border border-[var(--color-background)]">
        <p className="text-banner-p3">Welcome to SquareUp</p>
        <CustomContainer className="text-banner-p4">
          Where collaboration, Expertise, and Client-Centricity Intersect to
          Shape the Future of Digital Innovation.
        </CustomContainer>
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

export default BelowTextBanner;
