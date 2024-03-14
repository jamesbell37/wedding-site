// import React from "react";
import Image from "../assets/gifts.jpeg";
import { useTranslation } from "react-i18next";

const Gifts = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div
        className={
          "flex flex-1 flex-col gap-10 items-center whitespace-pre-line bg-off-white overflow-hidden"
        }
      >
        <img className="relative w-screen min-w-max brightness-50 overflow-visible" src={Image} />
        <div className="absolute flex flex-col w-full self-end text-center items-center text-white pt-5 top-1/4">
          <div
            className="text-sm pb-5 w-fit px-8 md:w-1/2"
          >
            {t("gifts.title")}
          </div>
          <div className="flex flex-col px-3">
            <div className="flex flex-col">
              <span className="text-xs font-bold">
                IBAN: ES29 0073 0100 5105 9305 4980{" "}
              </span>
              <span className="text-xs font-bold">
                BENEFICIARIO: Ricardo Cerrillo de la Fuente
              </span>
              <p className="py-2 text-xs">{t("gifts.int_transfer")}</p>
              <p className="text-xs font-bold">
                {t("gifts.int_transfer_details")}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Gifts;
