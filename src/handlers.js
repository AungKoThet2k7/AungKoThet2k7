import { sideBar } from "./selectors";

export const sideBarBtnHandler = () => {
  console.log("Open");
  sideBar.classList.remove("translate-x-full");
  sideBar.classList.add("duration-300");
};

export const sideBarCloseBtnhandler = () => {
  console.log("Close");
  sideBar.classList.add("translate-x-full");
};
