import CustomContainer from "@/components/custom/CustomContainer";
import { ImArrowUpRight2 } from "react-icons/im";
import img from "../../../assets/images/work/Image.png";

const SquareCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col border gap-5 lg:gap-7 border-[var(--color-background)] pb-10 md:pb-15 lg:pb-20 xl:pb-25">
        <div className=" px-2 md:px-6 lg:px-8 xl:px-10 py-4 lg:py-5 xl:py-6 work-26 border-b border-[var(--color-background)]">
          <p>E-Commerce Platform for Fashion Hub</p>
        </div>
        <div className="px-2 md:px-6 lg:px-8 xl:px-10 gap-4 md:gap-5 lg:gap-6 xl:gap-7 flex flex-col">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="flex justify-between items-end lg:items-center ">
            <div className="flex flex-col gap-2 lg:gap-3">
              <h3 className="work-heading-24">Chic Boutique</h3>
              <CustomContainer className="work-title-20">
                htttps:/www.chicboutique.com
              </CustomContainer>
            </div>
            <div>
              <CustomContainer className="!px-3 !py-3">
                <ImArrowUpRight2 className="text-[var(--color-primary)] text-md lg:text-lg xl:text-xl" />
              </CustomContainer>
            </div>
          </div>
          <div className="work-description">
            <p>
              We developed a visually stunning and user-friendly e-commerce
              platform for Chic Boutique, a renowned fashion retailer. The
              platform featured seamless product browsing, secure payment
              integration, and personalized recommendations, resulting in
              increased online sales and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareCard;
