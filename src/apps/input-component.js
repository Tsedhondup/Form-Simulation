import { EmailComponent } from "./email-componet.js";
import { PasswordComponent } from "./password-component.js";
import { EmojiComponent } from "./emoji-component.js";
export class InputComponent {
  addListenerToInputs() {
    // email-input
    const emailInput = document.querySelector("#email");
    emailInput.addEventListener("input", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const eSrc = event.target;
      const eSrcValue = eSrc.value.trim();
      new EmailComponent().validateEmail(eSrcValue); // emojis for email
    });

    // email-focus
    emailInput.addEventListener("focus", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const eSrc = event.target;
      const eSrcValue = eSrc.value.trim();
      new EmailComponent().focusHanlder(eSrcValue);
    });

    // email-blur

    emailInput.addEventListener("blur", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const eSrc = event.target;
      const eSrcValue = eSrc.value.trim();
      new EmailComponent().blurHandler(eSrcValue);
      emailInput.classList.remove("js_focus-color");
    });

    /*------------------------------------------------- */
    // password
    const passwordInput = document.querySelector("#password");
    passwordInput.addEventListener("input", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const eSrc = event.target;
      const eSrcValue = eSrc.value.trim();
      new PasswordComponent().validatePassword(eSrcValue);
    });

    passwordInput.addEventListener("focus", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const eSrc = event.target;
      const eSrcValue = eSrc.value.trim();
      new PasswordComponent().focusHanlder(eSrcValue);
      new EmojiComponent().renderEmojisOpacity();
    });

    passwordInput.addEventListener("blur", (event) => {
      event.stopPropagation();
      event.preventDefault();
      const eSrc = event.target;
      const eSrcValue = eSrc.value.trim();
      new PasswordComponent().blurHandler(eSrcValue);
    });
  }
}
