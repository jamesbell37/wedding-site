import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "@/lib/routes";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const ref = useRef(null);
  const location = useLocation();
  const { t } = useTranslation();

  useClickAway(ref, () => setIsMenuOpen(false));
  return (
    <>
      <div>
        <Hamburger toggled={isMenuOpen} size={20} toggle={setIsMenuOpen} />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-[100] fixed left-0 right-0 top-[1.5rem] mt-5 p-5 h-full bg-white justify-center pt-0 border-b-white/20"
          >
            <ul className="grid gap-5 pt-5">
              {routes.map((route, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.path}
                    className="w-full p-[0.08rem] rounded-xl"
                  >
                    <Link
                      to={route.path}
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      className={classNames(
                        `flex items-center justify-between w-fit`,
                        {
                          "border-b-2 border-black":
                            location.pathname === `/${route.path}`,
                        }
                      )}
                    >
                      <span className="flex gap-1 text-lg">
                        {t(`menu.${route.path}`)}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
