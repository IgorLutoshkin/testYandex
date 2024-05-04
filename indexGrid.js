import { button } from "./componentsForGrid/button/button.js";
import { combining } from "./componentsForGrid/combiningElements/combiningElements.js";
import { buttonLeftScroll, buttonRightScroll, dataGrid } from "./componentsForGrid/dataGrid.js";

combining()
button(dataGrid.buttonElementRight, buttonRightScroll)
button(dataGrid.buttonElementLeft, buttonLeftScroll)