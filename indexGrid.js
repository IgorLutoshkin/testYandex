import { button } from "./componentsForGrid/button/button.js";
import { combiningElements } from "./componentsForGrid/combiningElements/combiningElements.js";
import { buttonLeftScroll, buttonRightScroll, dataGrid } from "./componentsForGrid/dataGrid.js";

combiningElements()
button(dataGrid.buttonElementRight, buttonRightScroll)
button(dataGrid.buttonElementLeft, buttonLeftScroll)