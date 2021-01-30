import { InputComponent } from "./apps/input-component.js";
import { RobotComponent } from "./apps/robot-component.js";
import { FormComponent } from "./apps/form-comoponent.js";
new InputComponent().addListenerToInputs();
new RobotComponent().addListenerToRobot();
new FormComponent().addListenerToForm();
new FormComponent().addEventListenerToSuccessBtn();
