import Carousel from "../components/Carousel";
import HotelImage from "../assets/hotel.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RSVPButton from "@/components/RSVPButton";

type Props = {
  isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
  const { t } = useTranslation();

  return (
    !isMenuOpen && (
      <main className="flex flex-col gap-10 flex-1 pb-10 items-center whitespace-pre-line bg-off-white w-full overflow-hidden">
        <div className="flex flex-col w-max overflow-hidden">
        <Carousel />
        </div>
        <div className="flex flex-col gap-4 px-5 overflow-auto">
          <h2 className="text-center text-2xl font-semibold">
            {t("home.title")}
          </h2>
          <p className="text-center">{t("home.body")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("home.info") }}></p>
          <div className="self-center w-fit">
            <RSVPButton />
          </div>
        </div>
        <span
          className={
            "relative max-w-[500px] min-w-[300px] overflow-hidden items-center justify-center"
          }
        >
          <Link to={"/hotels"}>
            <img src={HotelImage} className="rounded-lg brightness-50" />
            <div className="absolute flex flex-col flex-shrink top-1/3 text-center w-full ">
              <span className="relative text-white text-lg self-center w-min sm:w-full">
                {t("home.hotel_rec")}
              </span>
            </div>
          </Link>
        </span>
      </main>
    )
  );
};

export default Home;
