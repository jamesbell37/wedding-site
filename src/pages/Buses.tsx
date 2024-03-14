// import React from "react";
import Image from "../assets/zones.png";
import { useTranslation } from "react-i18next";

const Buses = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div className="flex flex-col flex-1 px-5 whitespace-pre-line bg-off-white">
        <div className="text-2xl pt-5 font-bold">{t("buses.title")}</div>
        <span>{t("buses.body")}</span>
        <div className="overflow-auto">
          <img
            className="min-w-[25rem] xs:min-w-0 object-scale-down w-[30rem] rounded-2xl"
            src={Image}
         />
        </div>
      </div>
    )
  );
};

export default Buses;
