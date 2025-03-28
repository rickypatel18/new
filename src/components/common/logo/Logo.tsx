import logo from "../../../assets/images/logo/Logo.png";

interface LogoProps {
  hide?: boolean;
}

const Logo = ({ hide = false }: LogoProps) => {
  return (
    <div className=" flex gap-1 justify-start items-center py-2  max-w-[177px] ">
      <div className=" flex justify-center items-center bg-[var(--color-primary)] rounded-[10px] h-[40px] w-[40px] xl:w-[60px] xl:h-[60px]  ">
        <img
          src={logo}
          alt="logo"
          className="w-[30px] h-[32px] lg:w-[25px] lg:h-[28px] xl:w-[38px] xl:h-[43px]"
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

export default Logo;
