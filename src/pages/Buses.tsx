// import React from "react";
import Image from "../assets/zones.png";
import { useTranslation } from "react-i18next";

const Buses = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 px-5 whitespace-pre-line">
        <div className="text-xl font-bold">{t("buses.title")}</div>
        <span>{t("buses.body")}</span>
        <img
          className="object-scale-down h-fit w-[30rem]  rounded-2xl"
          src={Image}
        />
      </div>
    )
  );
};

export default Buses;
