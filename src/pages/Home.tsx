import Carousel from "../components/Carousel";
// import React from "react";
import HotelImage from "../assets/hotel.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import useIsMobile from "@/hooks/useIsMobile";

type Props = {
  isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
  const { t } = useTranslation();
  // const isMobile = useIsMobile();

  return (
    !isMenuOpen && (
      <main className="flex flex-col gap-10 flex-1 pb-10 items-center whitespace-pre-line">
        <Carousel />
        <div className="flex flex-col gap-4 px-5">
          <h2 className="text-center text-2xl">{t("home.title")}</h2>
          <p className="text-center">{t("home.body")}</p>
          <p>{t("home.info")}</p>
        </div>
        <span className={"relative max-w-[500px]"}>
          <Link to={"/hotels"}>
            <img src={HotelImage} className="rounded-lg brightness-50" />
            <span className="absolute top-1/3 right-0 left-0  text-white text-lg text-center">
              {t("home.hotel_rec")}
            </span>
          </Link>
        </span>
      </main>
    )
  );
};

export default Home;
