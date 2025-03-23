interface Job {
  imageUrl: string;
  heading: string;
  description: string;
}

interface ApplyData {
  title: string;
  value: Job[];
}
// value: Array<{ heading: string; description: string }>; if written in one interface

const ApplyCard = ({ applyData }: { applyData: ApplyData[] }) => {
  return (
    <div>
      {applyData.map((category, index) => (
        <div
          key={index}
          className="flex flex-col pt-10 gap-10 xl:pt-12 xl:gap-12 border border-[var(--color-border)]"
        >
          <h3 className="h3-28 pl-2 sm:pl-4 md:pl-6 lg:pl-10 xl:pl-12">
            {category.title}
          </h3>

          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.value.map((job, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-2 sm:p-4 md:p-6 lg:p-10 xl:p-12 gap-10 border border-[var(--color-border)]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex lg:flex-col gap-3 items-center lg:items-start">
                    <div className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] flex justify-center items-center xl:h-[88px] xl:w-[88px] rounded-[10px] ">
                      <div className="bg-gradient-to-t from-transparent to-[#242424] h-[58px] w-[58px] lg:h-[70px] lg:w-[70px] xl:h-[88px] xl:w-[88px] rounded-[12px] flex justify-center items-center">
                        <img
                          src={job.imageUrl}
                          alt={job.heading}
                          className="w-6 h-6 lg:w-6 lg:h-6 xl:w-10 xl:h-10"
                        />
                      </div>
                    </div>
                    <h3 className="h3">{job.heading}</h3>
                  </div>
                  <p className="h3-p">{job.description}</p>
                </div>

                <button className="rounded-[8px] p-[16px] bg-[#262626] text-[14px] lg:text-[16px] xl:text-[18px] font-[500]">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplyCard;
