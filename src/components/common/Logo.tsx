import logo from "../../assets/images/logo/Logo.png";

interface LogoProps {
  hide?: boolean; // Optional prop with boolean type
}

const Logo = ({ hide = false }: LogoProps) => {
  return (
    <div className="w-fit flex gap-[10px] justify-center items-center py-[10px] ">
      <div className="flex justify-center items-center bg-[var(--color-primary)] rounded-[10px] p-[6px] md:p-[8px] lg:p-[10px] ">
        <img
          src={logo}
          alt="logo"
          className="w-[21px] h-[25px] md:w-[24px] md:h-[30px] lg:w-[29px] lg:h-[39px] xl:w-[38px] xl:h-[43px]"
        />
      </div>
      <h3
        className={`text-[var(--color-text-primary)] text-[16px] md:text-[18px] lg:text-[20px] font-[600]  ${
          hide ? "hidden" : ""
        }`}
      >
        SquareUp
      </h3>
    </div>
  );
};

export default Logo;
