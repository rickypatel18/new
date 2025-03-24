import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 xl:gap-5 justify-center items-center border border-[var(--color-background)]  p-4 lg:p-2 xl:p-3 rounded-xl w-[310px] md:w-[340px] lg:w-[340px] xl:w-[390px] max-w-[402px]">
      <div className="">
        <p className="text-[#E6E6E6] text-[16px] xl:[18px] font-[500]">
          Stay Connected
        </p>
      </div>
      <div className="flex flex-row gap-3 xl:gap-4">
        <div
          className="bg-gradient-to-t from-transparent to-[#242424] h-[52px] w-[52px] flex justify-center items-center xl:h-[64px] xl:w-[64px] rounded-md"
         
        >
          <FaFacebook className="text-[var(--color-primary)] w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" />
        </div>
        <div
          className="bg-gradient-to-t from-transparent to-[#242424] h-[52px] w-[52px] flex justify-center items-center xl:h-[64px] xl:w-[64px] rounded-md"
          
        >
          <FaTwitter className="text-[var(--color-primary)] w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" />
        </div>
        <div
          className="bg-gradient-to-t from-transparent to-[#242424] h-[52px] w-[52px] flex justify-center items-center xl:h-[64px] xl:w-[64px] rounded-md"
          
        >
          <FaLinkedin className="text-[var(--color-primary)] w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Media;
