import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import { LANGUAGES } from "@/constants/languages";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Link } from "react-router-dom";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const { i18n } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <nav
      className={classNames(
        "block xs:flex min-w-full text-center xs:text-left xs:flex-row justify-between items-center sm:px-5 px-3 pt-3 pb-1 xs:py-3 sticky bg-white rounded-b-xl top-0 z-[100] overflow-scroll",
        {
          "drop-shadow-md": !isMenuOpen,
        }
      )}
    >
      
      <Link to={"/"} className={"self-center min-w-max text-center place-content-center  text-xl sm:text-2xl font-extrabold"}>
        Cris & Richi
      </Link>
      
      <div className="flex flex-row gap-4">
        <select defaultValue={"es"} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
        <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
