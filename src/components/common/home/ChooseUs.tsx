import img from "../../../assets/images/carrer-icon/Icon (2).png";

const ChooseUs = () => {
  const data = [
    {
      imageUrl: img,
      heading: "Expertise",
      description:
        "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
      imageUrl: img,
      heading: "Expertise",
      description:
        "Our   who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
    {
      imageUrl: img,
      heading: "Expertise",
      description: "Our  of highly skilled profess solutions.",
    },
    {
      imageUrl: img,
      heading: "Expertise",
      description:
        "Our  professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    },
  ];

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      {data.map((d,index) => {
        return (
          <div key={index} className="flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 gap-20 border border-[var(--color-border)]">
            <div className=" flex flex-col gap-10">
              <div className="flex gap-5 justify-start items-center">
                <div className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] xl:h-[88px] xl:w-[88px] rounded-[12px] flex justify-center items-center">
                  <img
                    src={d.imageUrl}
                    alt={d.heading}
                    className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10"
                  />
                </div>

                <h3 className="h3">{d.heading}</h3>
              </div>

              <div className="flex flex-col gap-[20px]">
                <p className="h3-p">{d.description}</p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
  )}

  export default ChooseUs;
