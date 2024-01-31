import React from "react";
import HamburgerMenu from "../HamburgerMenu";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <nav
      className={
        "flex flex-row justify-between items-center px-5 sticky bg-white rounded-b-xl top-0"
      }
    >
      <span>Richi & Cris</span>
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export default Navbar;
