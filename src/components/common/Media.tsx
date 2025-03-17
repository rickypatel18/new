import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-row gap-[20px] justify-center items-center">
      <div>
        <p className="text-[#E6E6E6] text-[16px] font-[500]">Stay Connected</p>
      </div>
      <div className="flex flex-row gap-[10px]">
        <div
          className="h-fit p-[16px] rounded-[6px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(36,36,36,1) 90%)",
            border: "1px solid",
            borderImage:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 1%, rgba(36,36,36,1) 100%) 1",
          }}
        >
          <FaFacebook className="text-[var(--color-primary)] w-[20px] h-[20px]" />
        </div>
        <div
          className="h-fit p-[16px] rounded-[6px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(36,36,36,1) 90%)",
            border: "1px solid",
            borderImage:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 1%, rgba(36,36,36,1) 100%) 1",
          }}
        >
          <FaTwitter className="text-[var(--color-primary)] w-[20px] h-[20px]" />
        </div>
        <div
          className=" h-fit p-[16px] rounded-[6px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(36,36,36,1) 90%)",
            border: "1px solid",
            borderImage:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 1%, rgba(36,36,36,1) 100%) 1",
          }}
        >
          <FaLinkedin className="text-[var(--color-primary)] w-[20px] h-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Media;
