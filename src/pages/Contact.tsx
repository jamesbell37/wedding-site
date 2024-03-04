// import React from "react";
import Image from "../assets/boda.jpeg";
import { useTranslation } from "react-i18next";

const Contact = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  return (
    !isMenuOpen && (
      <div
        className={
          "relative flex flex-1 flex-col gap-10 items-center whitespace-pre-line bg-off-white overflow-hidden"
        }
      >
        <img
          className="object-scale-down h-fit w-[30rem] min-w-[23rem] brightness-75 rounded-2xl"
          src={Image}
        />
        <div className="absolute flex flex-col w-full self-end text-center items-center text-white">
          <div className={"text-lg font-bold pb-5 w-fit px-6"}>
            {t("contact.title")}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="text-lg">Cris</span>
              <span className="text-sm">Phone: +34 611 09 93 47</span>
              <span className="text-sm">
                Email: cristina.bell.ssm@gmail.com
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg">Richi</span>
              <span className="text-sm">Phone: +34 606 83 54 23</span>
              <span className="text-sm">Email: rcerrillo95@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Contact;
