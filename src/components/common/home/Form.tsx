import CustomButton from "../../custom/CustomButton.js";
import "../../../assets/css/form.css";
import "../../../assets/js/form.js";
import Slider from "./Slider.js";

const Form = () => {
  return (
    <form action="" className="container flex justify-center items-center ">
      <div className="flex flex-col w-full  lg:w-[850px] xl:w-[1000px] 2xl:w-[1200px]  px-2 py-7 md:p-10 lg:p-12 xl:p-15 gap-3 md:gap-5 xl:gap-7 ">
        <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-5 xl:gap-7">
          <div className="flex flex-col border border-[var(--color-border)] bg-[#24242480] w-full py-3 px-5 lg:py-5 lg:px-7 gap-3 lg:gap-4 rounded-md">
            <label htmlFor="fullName" className="form-heading">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="custom-input w-full h3-p"
              placeholder="Enter full name"
            />
          </div>
          <div className="flex flex-col border border-[var(--color-border)] bg-[#24242480]  w-full py-3 px-5 lg:py-5 lg:px-7 gap-3 lg:gap-4 rounded-md">
            <label htmlFor="email" className="form-heading">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="custom-input w-full h3-p"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="flex flex-col bg-[#24242480] py-3 px-5 lg:py-5 lg:px-7 gap-3 lg:gap-4  border border-[var(--color-border)] rounded-md">
          <div>
            <p className="form-heading">Why are you contacting us?</p>
          </div>
          <div className="grid grid-cols-2 gap-4 h3-p">
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                id="chk1"
                className="custom-checkbox rounded-b-md"
              />
              <label htmlFor="chk1">Option 1</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="chk2"
                className="custom-checkbox rounded-b-md "
              />
              <label htmlFor="chk2">Option 2</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="chk3"
                className="custom-checkbox rounded-b-md"
              />
              <label htmlFor="chk3">Option 3</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="chk4"
                className="custom-checkbox rounded-b-md"
              />
              <label htmlFor="chk4">Option 4</label>
            </div>
          </div>
        </div>

        {/* budget */}
        <div className="flex flex-col border border-[var(--color-border)] rounded-md py-4 px-5 lg:py-5 lg:px-7 gap-5 md:gap-6 lg:gap-8 xl:gap-10 bg-[#24242480] ">
          <div className="gap-4 flex flex-col">
            <p className="form-heading">Your Budget</p>
            <p className="h3-p">Slide to indicate your budget range</p>
          </div>
          <div className="pb-5">
            <Slider />
          </div>
        </div>

        <div className="flex flex-col border border-[var(--color-border)] rounded-md py-3 px-5 lg:py-5 lg:px-7 gap-3 lg:gap-4 bg-[#24242480] w-full">
          <p className="form-heading">Your Message</p>
          <input
            type="text"
            className="custom-input w-full h3-p"
            placeholder="Type here"
          />
        </div>

        <div className="flex justify-center items-center ">
          <CustomButton
            display="flex md:flex"
            padding="px-12"
            width="w-full md:w-fit"
            text="Submit"
            textSize="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
            textColor="text-[var(--color-background)]"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
