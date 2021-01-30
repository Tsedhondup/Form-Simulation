import { EmojiComponent } from "./emoji-component.js";
export class FormComponent {
  static showSuccessMsg() {
    const msgWrapper = document.querySelector(".account-msg");
    msgWrapper.classList.add("js_display-flex");

    // default setting
    // emptying the input field
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const robotBtn = document.querySelector("#robot-check");

    emailInput.value = "";
    passwordInput.value = "";
    robotBtn.checked = false;
    // unchecking the robot boxes
    const paraBtn = document.querySelectorAll(".img-wrapper p");
    paraBtn.forEach((item) => {
      item.textContent = "";
    });

    // emojis
    new EmojiComponent().renderEmojisClass();
    // initial imoji
    const person = document.querySelector(".person");
    const initialEmoji = document.querySelector(".fa-meh");
    person.textContent = "";
    initialEmoji.classList.remove("dis-none");
  }
  addEventListenerToSuccessBtn() {
    const msgWrapper = document.querySelector(".account-msg");
    const successMsgBtn = document.querySelector(".close-msg");
    successMsgBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      msgWrapper.classList.remove("js_display-flex");
    });
  }
  addListenerToForm() {
    const formEl = document.querySelector("form");
    formEl.addEventListener("submit", (event) => {
      // email
      const emailPattern = /[^@]+@[^@]+/;
      const emailInput = document.querySelector("#email");
      const emailMsg = document.querySelector(".em-msg p");
      const emailValue = emailInput.value;
      // password
      const pwPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      const passwordInput = document.querySelector("#password");
      const passMsg = document.querySelector(".pw-msg");
      const passwordValue = passwordInput.value;

      // robot check
      const robotBtn = document.querySelector("#robot-check");
      const robotMsg = document.querySelector(".robot-msg");

      // validate email
      if (!emailPattern.test(emailValue)) {
        emailMsg.textContent = "Invalid email";
        event.preventDefault();
        emailInput.focus();
      }
      // validate password
      if (!pwPattern.test(passwordValue)) {
        passMsg.textContent = "Invalid password";
        event.preventDefault();
        passwordInput.focus();
      }
      // robot check

      if (!robotBtn.checked === true) {
        robotMsg.textContent = "Please select the option";
        event.preventDefault();
      }

      if (
        !emailPattern.test(emailValue) &&
        !pwPattern.test(passwordValue) &&
        !robotBtn.checked === true
      ) {
        emailMsg.textContent = "Invalid email";
        passMsg.textContent = "Invalid password";
        robotMsg.textContent = "Please select the option";
        event.preventDefault();
        emailInput.focus();
      } else if (
        emailPattern.test(emailValue) &&
        pwPattern.test(passwordValue) &&
        robotBtn.checked === true
      ) {
        // FormComponent.showSuccessMsg();
        alert("your account has been succesfully created");
      }
    });
  }
}
