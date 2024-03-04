import { useTranslation } from "react-i18next";

const RSVPButton = () => {
  const { t } = useTranslation();

  return (
    <div className="relative group m-2">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://forms.gle/Sz7Y9maYZpvYmHUy7"
        className="block text-white font-medium rounded-xl p-2 w-fit bg-gradient-to-r from-[#A175FF] to-[#7331FF] transform transition-transform duration-200 hover:scale-105"
      >
        {t("common.rsvp")}
      </a>
      <div className="confetti-container absolute -right-10 top-0 hidden group-hover:flex">
        <div
          className="confetti-piece circle"
          style={{ left: "10px", top: "10px" }}
        ></div>
        <div
          className="confetti-piece square"
          style={{ left: "30px", top: "20px" }}
        ></div>
        <div
          className="confetti-piece rectangle"
          style={{ left: "50px", top: "15px" }}
        ></div>
      </div>
      <div className="confetti-container absolute -left-10 top-0 hidden group-hover:flex">
        <div
          className="confetti-piece circle"
          style={{ right: "10px", top: "10px" }}
        ></div>
        <div
          className="confetti-piece square"
          style={{ right: "30px", top: "20px" }}
        ></div>
        <div
          className="confetti-piece rectangle"
          style={{ right: "50px", top: "15px" }}
        ></div>
      </div>
    </div>
  );
};

export default RSVPButton;
