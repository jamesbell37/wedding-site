import Carousel from "../components/Carousel";
// import React from "react";
import HotelImage from "../assets/hotel.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  isMenuOpen: boolean;
};
const Home = ({ isMenuOpen }: Props) => {
  const { t } = useTranslation();

  return (
    !isMenuOpen && (
      <main className="flex flex-col gap-10 flex-1">
        <Carousel />
        <div className="flex flex-col gap-4 px-5">
          <h2 className="text-center text-2xl">{t("home.title")}</h2>
          <p className={"text-center"}>{t("home.body")}</p>
        </div>
        <span className={"px-5 relative"}>
          <Link to={"/hotels"}>
            <img src={HotelImage} className="rounded-lg brightness-50" />
            <span className="absolute top-1/2 self-center text-white text-lg w-full text-center">
              Hotel recommendations
            </span>
          </Link>
        </span>
      </main>
    )
  );
};

export default Home;
