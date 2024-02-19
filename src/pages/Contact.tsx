// import React from "react";
import Image from "../assets/boda.jpeg";
import { useTranslation } from "react-i18next";

const Contact = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div
        className={
          "relative flex flex-1 flex-col gap-10  h-fit items-center whitespace-pre-line bg-off-white h-screen"
        }
      >
        <img
          className="object-scale-down h-fit w-[30rem] brightness-75 rounded-2xl"
          src={Image}
        />
        <div className="absolute flex flex-col w-full self-end text-center items-center text-white">
          <div className={"text-md font-bold pb-5 w-fit"}>
            {t("contact.title")}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-md">Cristina</span>
              <span className="text-xs">Phone: +34 611 09 93 47</span>
              <span className="text-xs">
                Email: cristina.bell.ssm@gmail.com
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-md">Ricardo</span>
              <span className="text-xs">Phone: +34 606 83 54 23</span>
              <span className="text-xs">Email: rcerrillo95@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Contact;
