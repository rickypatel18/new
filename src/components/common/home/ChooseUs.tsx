import { FaCrown, FaMedal } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdEnergySavingsLeaf } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div className="flex gap-5 justify-start items-center">
            <div
              className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
            >
              <FaMedal className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
            </div>
            <h3 className="h3">Expertise</h3>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="h3-p">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div className="flex gap-5 justify-start items-center">
            <div
              className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
             
            >
              <IoPeopleSharp className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
            </div>
            <h3 className="h3">Expertise</h3>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="h3-p">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div className="flex gap-5 justify-start items-center">
            <div
              className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
              
            >
              <MdEnergySavingsLeaf className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
            </div>
            <h3 className="h3">Expertise</h3>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="h3-p">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div className="flex gap-5 justify-start items-center">
            <div
              className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
             
            >
              <FaCrown className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
            </div>
            <h3 className="h3">Expertise</h3>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="h3-p">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
