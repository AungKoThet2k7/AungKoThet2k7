import { sideBarBtnHandler, sideBarCloseBtnhandler } from "./handlers";
import { sideBarBtn, sideBarCloseBtn } from "./selectors";

const listener = () => {
  sideBarBtn.addEventListener("click", sideBarBtnHandler);
  sideBarCloseBtn.addEventListener("click", sideBarCloseBtnhandler);
};

export default listener;
