import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import { LANGUAGES } from "@/constants/languages";
import { useTranslation } from "react-i18next";

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
      className={
        "flex flex-row justify-between items-center px-5 py-3 sticky bg-white rounded-b-xl top-0"
      }
    >
      <span className={"text-2xl"}>Richi & Cris</span>
      <div className="flex flex-row gap-4">
        <select defaultValue={"en"} onChange={onChangeLang}>
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
