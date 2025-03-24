import user from "../../../assets/images/user/user.png";

const ClientSay = () => {
  const data = [
    {
      heading:
        "SquareUp has been Instrumental in Transforming our OnlinePresence.",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      cImageUrl: user,
      cName: "John Smith",
      cDesignation: "CEO of Chic Boutique",
    },
    {
      heading:
        "SquareUp has been Instrumental in Transforming our OnlinePresence.",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      cImageUrl: user,
      cName: "John Smith",
      cDesignation: "CEO of Chic Boutique",
    },
    {
      heading:
        "SquareUp has been Instrumental in Transforming our OnlinePresence.",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      cImageUrl: user,
      cName: "John Smith",
      cDesignation: "CEO of Chic Boutique",
    },
    {
      heading:
        "SquareUp has been Instrumental in Transforming our OnlinePresence.",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      cImageUrl: user,
      cName: "John Smith",
      cDesignation: "CEO of Chic Boutique",
    },
    {
      heading:
        "SquareUp has been Instrumental in Transforming our OnlinePresence.",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      cImageUrl: user,
      cName: "John Smith",
      cDesignation: "CEO of Chic Boutique",
    },
    {
      heading:
        "SquareUp has been Instrumental in Transforming our OnlinePresence.",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
      cImageUrl: user,
      cName: "John Smith",
      cDesignation: "CEO of Chic Boutique",
    },
  ];

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      {data.map((d,index) => {
        return (
          <div key={index} className="flex flex-col justify-between gap-10 py-4 px-4 sm:py-10 sm:px-5 md:py-15 md:px-10 lg:py-20 lg:px-15 xl:py-25 xl:px-20 border border-[var(--color-border)]">
            <div className=" flex flex-col gap-10">
              <div className="flex flex-col gap-6 justify-start items-center">
                <h3 className="!text-[#d8ff99] h3">{d.heading}</h3>
                <p className="h3-p">{d.description}</p>
              </div>

              <div className="flex justify-between gap-3 items-center">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-15 xl:h-15">
                    <img
                      src={d.cImageUrl}
                      alt={d.cImageUrl}
                      className="w-full h-full object-cover rounded-[8px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className=" text-[16px] xl:text-[20px]">{d.cName}</p>
                    <p className="h3-p">{d.cDesignation}</p>
                  </div>
                </div>
                <div className=" hidden lg:flex rounded-[8px] p-2 lg:p-3 xl:p-4 bg-[#262626] justify-center items-center">
                  <button className=" text-[14px] lg:text-[16px] xl:text-[18px] font-[500]  ">
                    Open Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientSay;
