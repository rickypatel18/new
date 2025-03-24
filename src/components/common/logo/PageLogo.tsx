import logo from "../../../assets/images/logo/Logo.png";

interface PageLogoProps {
  hide?: boolean;
}

const PageLogo = ({ hide = false }: PageLogoProps) => {
  return (
    <div className=" flex gap-[5px] justify-start items-center py-[10px] max-w-[177px] ">
      <div className=" flex justify-center items-center bg-[var(--color-primary)] rounded-[10px] h-17 w-17 lg:h-20 lg:w-20 xl:w-30 xl:h-30  ">
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 lg:w-12 lg:h-12 xl:w-15 xl:h-15"
        />
      </div>
      <h3
        className={`text-[var(--color-text-primary)] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[600]  ${
          hide ? "hidden" : ""
        }`}
      >
        SquareUp
      </h3>
    </div>
  );
};

export default PageLogo;
