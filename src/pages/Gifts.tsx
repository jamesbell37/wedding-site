// import React from "react";
import classNames from "classnames";
import Image from "../assets/gifts.jpeg";
import { useTranslation } from "react-i18next";
import useIsMobile from "@/hooks/useIsMobile";

const Gifts = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    !isMenuOpen && (
      <div
        className={
          "flex flex-1 flex-col gap-10  h-fit items-center whitespace-pre-line bg-off-white h-screen"
        }
      >
        <img className="relative w-screen brightness-50 " src={Image} />
        <div className="absolute flex flex-col w-full self-end text-center items-center text-white pt-5 top-1/4">
          <div
            className={classNames("text-sm pb-5", {
              "w-1/2": !isMobile,
              "w-fit px-8": isMobile,
            })}
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
