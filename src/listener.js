import {
  navBtnHandler,
  sideBarBtnHandler,
  sideBarCloseBtnhandler,
} from "./handlers";
import { navBtn, sideBarBtn, sideBarCloseBtn } from "./selectors";

const listener = () => {
  sideBarBtn.addEventListener("click", sideBarBtnHandler);
  sideBarCloseBtn.addEventListener("click", sideBarCloseBtnhandler);
  navBtn.forEach((btn) => {
    btn.addEventListener("click", () => navBtnHandler(btn));
  });
};

export default listener;
