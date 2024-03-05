// import React from "react";
import Image from "../assets/iglesia.png";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';

const Church = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div
        className={
          "relative flex flex-1 flex-col gap-10 items-center whitespace-pre-line bg-off-white overflow-hidden "
        }
      >
        <img
          className="min-w-[20rem] w-[30rem] brightness-75 rounded-2xl overflow-hidden"
          src={Image}
        />
        <div className="absolute flex flex-col w-full self-end text-center items-center text-white">
          <div className="flex flex-col gap-2 items-center py-5">
            <span className={"text-xl font-bold "}>{t("church.title")}</span>
            <span className={"text-lg font-medium   "}>
              Iglesia de Nuestra Señora de la Asunción
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">{t("church.location")}</span>
            <span className="text-lg font-medium">
              Calle Verdes 145, 39160, Galizano, Cantabria
            </span>
          </div>
        </div>
        <div className="xs:grid w-full h-full overflow-scroll place-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.614144769392!2d-3.6736928236058457!3d43.46865217111148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4eb42e73991f65%3A0xe97c9f925cfe7e07!2sC.%20Verdes%2C%20145%2C%2039160%20Galizano%2C%20Cantabria!5e0!3m2!1sen!2ses!4v1708340943044!5m2!1sen!2ses"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
        </div>
      </div>
    )
  );
};

export default Church;
