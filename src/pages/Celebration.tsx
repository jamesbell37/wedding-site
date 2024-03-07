// import React from "react";
import Image from "../assets/finca.jpeg";
import { useTranslation } from "react-i18next";

const Celebration = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div
        className={
          "relative flex flex-1 flex-col gap-10 items-center whitespace-pre-line bg-off-white overflow-hidden"
        }
      >
        <img
          className="object-scale-down h-fit min-w-[30rem] w-[30rem] brightness-75 rounded-2xl"
          src={Image}
        />
        <div className="absolute flex flex-col gap-5 py-5 w-full self-end text-center items-center text-white">
          <div className="flex flex-col gap-2 items-center">
            <span className={"text-xl font-bold "}>
              {t("celebration.title")}
            </span>
            <div className="flex flex-col">
              <span>Finca de San Juan</span>
              <span>Hosteria & Catering</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">
              {t("celebration.location")}
            </span>
            <span className="text-lg font-medium">
              Barrio de San Juan, s/n, 39660 Villabanez, Cantabria
            </span>
          </div>
        </div>
        <div className="xs:grid w-full overflow-scroll place-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.898308291007!2d-3.95781682384094!3d43.316388171120174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd493bb748468273%3A0x7c21c879f46bb6ae!2sFinca%20de%20San%20Juan%20Hoster%C3%ADa%20%26%20Catering!5e0!3m2!1sen!2ses!4v1708341899558!5m2!1sen!2ses"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    )
  );
};

export default Celebration;
