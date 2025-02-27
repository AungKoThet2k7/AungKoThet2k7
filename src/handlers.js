import { navBtn, sideBar } from "./selectors";

export const sideBarBtnHandler = () => {
  sideBar.classList.remove("translate-x-full");
  sideBar.classList.add("duration-300");
};

export const sideBarCloseBtnhandler = () => {
  sideBar.classList.add("translate-x-full");
};

export const navBtnHandler = (btn) => {
  navBtn.forEach((btn) => {
    btn.classList.remove("text-sky-500", "underline");
  });

  btn.classList.add("text-sky-500", "underline");
};
