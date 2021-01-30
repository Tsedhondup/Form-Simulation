import { EmojiComponent } from "./emoji-component.js";

// checkbox count
let checkboxCount = 0;
export class RobotComponent {
  static validateRobot() {
    const robotBtn = document.querySelector(".robot-test");
    robotBtn.classList.add("js_display-flex");
  }

  static toggleClassRobotWrapper() {
    const robotBtn = document.querySelector(".robot-test");
    robotBtn.classList.remove("js_display-flex");
  }

  static checkedParaBox(el) {
    const text = "✓";
    el.textContent = text;
    const elClass = el.classList;
    elClass.forEach((item) => {
      if (item === "right-box") {
        checkboxCount += 1;
      }
    });
  }

  static validateCheckboxCount() {
    const robotTest = document.querySelector(".robot-test");
    const robotBtn = document.querySelector("#robot-check");
    const robotMsg = document.querySelector(".robot-msg");
    if (checkboxCount > 5) {
      robotBtn.checked = true;
      robotMsg.textContent = "";
      robotTest.classList.remove("js_display-flex");
    } else {
      robotBtn.checked = false;
      robotMsg.textContent = "Please select the option";
      robotTest.classList.remove("js_display-flex");
    }
  }

  addListenerToRobot() {
    const robotBtn = document.querySelector("#robot-check");
    const continueBtn = document.querySelector(".continue");
    const paraBtn = document.querySelectorAll(".img-wrapper p");
    robotBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      RobotComponent.validateRobot();
    });
    continueBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      RobotComponent.validateCheckboxCount();
    });

    paraBtn.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const eSource = event.target;
        RobotComponent.checkedParaBox(eSource);
      });
    });
  }
}
