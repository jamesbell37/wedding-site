// import React from "react";
import Image from "../assets/zones.png";
import { useTranslation } from "react-i18next";

const Buses = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 px-5 whitespace-pre-line bg-off-white h-screen">
        <div className="flex flex-col text-2xl pt-5 font-bold">{t("buses.title")}</div>
        <span>{t("buses.body")}</span>
        <div className="max-w-sm overflow-auto">
          <img
            className=" object-scale-down h-fit w-[30rem] max-w-sm rounded-2xl"
            src={Image}
         />
        </div>
      </div>
    )
  );
};

export default Buses;
