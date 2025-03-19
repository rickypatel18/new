import img1 from "../../assets/images/company-logo/Logo.png";
import img2 from "../../assets/images/company-logo/Logo (1).png";
import img3 from "../../assets/images/company-logo/Logo (2).png";
import img4 from "../../assets/images/company-logo/Logo (3).png";
import img5 from "../../assets/images/company-logo/Logo (4).png";
import img6 from "../../assets/images/company-logo/Logo (5).png";

const Companies = () => {
  return (
    <div className="container relative gap-5 border border-[var(--color-border)] flex flex-col items-center p-8">
      <div className="absolute w-[250px] xl:w-[300px] top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-[24px] py-[14px] xl:px-[34px] xl:py-[20px] bg-[#1A1A1A] border rounded-[100px] ">
        <p className="text-[14px] xl:text-[18px] font-[500] text-center">
          Trusted By 250+ Companies
        </p>
      </div>

      {/* Grid Container  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-5">
        {/* Images */}
        <div className="py-3 px-7 md:py-4 md:px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex justify-center items-center  ">
          <img
            src={img1}
            alt=""
            className="w-17 h-8 lg:w-21 lg:h-9 xl:w-25 xl:h-12"
          />
        </div>
        <div className="py-3 px-7 md:py-4 md:px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex justify-center items-center ">
          <img
            src={img2}
            alt=""
            className="w-18 h-9 lg:w-21 lg:h-10 xl:w-28 xl:h-12"
          />
        </div>
        <div className="py-3 px-7 md:py-4 md:px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex justify-center items-center ">
          <img
            src={img3}
            alt=""
            className="w-16 h-7 lg:w-21 lg:h-9 xl:w-25 xl:h-11"
          />
        </div>
        <div className="py-3 px-7 md:py-4 md:px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex justify-center items-center ">
          <img
            src={img4}
            alt=""
            className="w-17 h-8 lg:w-21 lg:h-9 xl:w-25 xl:h-12"
          />
        </div>
        <div className="py-3 px-7 md:py-4 md:px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex justify-center items-center ">
          <img
            src={img5}
            alt=""
            className="w-17 h-8 lg:w-21 lg:h-9 xl:w-25 xl:h-12"
          />
        </div>
        <div className="py-3 px-7 md:py-4 md:px-8 lg:py-5 lg:px-9 xl:py-5 xl:px-10 flex justify-center items-center ">
          <img
            src={img6}
            alt=""
            className="w-18 h-9 lg:w-22 lg:h-10 xl:w-26 xl:h-13"
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
