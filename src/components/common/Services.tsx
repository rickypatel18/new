import { FaPenFancy } from "react-icons/fa";
import { HiPuzzlePiece } from "react-icons/hi2";
import { RiMedicineBottleFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="flex flex-col justify-between p-[50px] gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div
            className="h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(36,36,36,1) 90%)",
            }}
          >
            <FaPenFancy className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="h3">Design</h3>
            <p className="h3-p">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
          </div>
        </div>
        <div className="border rounded-[8px] p-[16px] bg-[#262626] flex justify-center items">
          <button className=" text-[14px] lg:text-[16px] xl:text-[18px] font-[500]  ">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between p-[50px] gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div
            className="h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(36,36,36,1) 90%)",
            }}
          >
            <HiPuzzlePiece className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="h3">Design</h3>
            <p className="h3-p">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
          </div>
        </div>
        <div className="border rounded-[8px] p-[16px] bg-[#262626] flex justify-center items">
          <button className=" text-[14px] lg:text-[16px] xl:text-[18px] font-[500]  ">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between p-[50px] gap-20 border border-[var(--color-border)]">
        <div className=" flex flex-col gap-10">
          <div
            className="h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] "
            style={{
              background:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(36,36,36,1) 90%)",
            }}
          >
            <RiMedicineBottleFill className="text-[var(--color-primary)] w-[22px] h-[22px] lg:w-[26px] lg:h-[26px] xl:w-[36px] xl:h-[36px]" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h3 className="h3">Design</h3>
            <p className="h3-p">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it's about creating seamless and intuitive user
              experiences.
            </p>
          </div>
        </div>
        <div className="border rounded-[8px] p-[16px] bg-[#262626] flex justify-center items">
          <button className=" text-[14px] lg:text-[16px] xl:text-[18px] font-[500]  ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
