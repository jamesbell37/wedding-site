// import React from "react";
import Image from "../assets/boda.jpeg";
import { useTranslation } from "react-i18next";

const Contact = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div className={"flex flex-1 flex-col gap-10 px-5 h-fit items-center"}>
        <img
          className=" object-scale-down h-fit w-[30rem] brightness-75 rounded-2xl"
          src={Image}
        />
        <div className="absolute flex flex-col top-1/4 w-full self-end text-center text-white">
          <div className={"text-xl font-bold pb-5"}>{t("contact.title")}</div>
          <div>Cristina: +34 123 45 67 89</div>
          <div>Ricardo: +34 123 45 67 89</div>
        </div>
      </div>
    )
  );
};

export default Contact;
