import { EmojiComponent } from "./emoji-component.js";

export class PasswordComponent {
  validatePassword(val) {
    const msgEl = document.querySelector(".pw-msg");
    const pwPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const valLength = val.length;

    // max-length check
    function maxLengthCheck() {
      if (!pwPattern.test(val)) {
        msgEl.textContent = `Atleast one lowercase & one uppercase letter, one digit and one special character, `;
        msgEl.classList.remove("js_white-color");
        msgEl.classList.add("js_red-color");
      }

      if (valLength > 15) {
        msgEl.classList.remove("js_white-color");
        msgEl.classList.add("js_red-color");
        msgEl.textContent = "Password should be less then 15 charators";
      }
    }
    // pattern matching
    function patternMatch() {
      if (pwPattern.test(val) && valLength < 15) {
        msgEl.textContent = "strong password!";
        msgEl.classList.add("js_green-color");
        msgEl.classList.remove("js_red-color");
      } else {
        maxLengthCheck();
      }
    }
    // nested call back for password length
    function validatePass() {
      if (valLength < 8) {
        msgEl.textContent = "Too short";
        msgEl.classList.remove("js_green-color");
        msgEl.classList.add("js_red-color");
      } else {
        patternMatch();
      }
    }
    // calling function on condition
    if (valLength >= 2) {
      validatePass();
    }
  }
  focusHanlder(val) {
    const secureTag = document.querySelector(".secure");
    const secureIcon = secureTag.querySelector("i");
    const rollEmo = document.querySelector(".fa-meh-blank");
    new EmojiComponent().renderEmojisClass();
    secureTag.classList.add("js_color-lime");
    secureIcon.classList.add("js_opacity-one");
    secureIcon.classList.remove("dis-none");
  }
  blurHandler(val) {
    const msgEl = document.querySelector(".pw-msg");
    const pwPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    // max-length check
    function maxLengthCheck() {
      if (!pwPattern.test(val)) {
        msgEl.classList.add("js_red-color");
        msgEl.textContent = "Weak password";
      }

      if (val.length > 15) {
        msgEl.classList.add("js_red-color");
        msgEl.textContent = "Password too long";
      }
    }
    // validate the pass
    function validatePass() {
      if (pwPattern.test(val) && val.length < 15) {
        msgEl.classList.remove("js_green-color");
        msgEl.classList.remove("js_red-color");
        msgEl.textContent = " ";
      } else {
        maxLengthCheck();
      }
    }

    // initial length check
    function minLengthCheck() {
      if (val.length < 8) {
        msgEl.textContent = "Password too short";
        msgEl.classList.add("js_red-color");
      } else {
        validatePass();
      }
    }
    // blank check
    if (val) {
      minLengthCheck();
    } else {
      msgEl.textContent = "Your password is missing";
      msgEl.classList.add("js_red-color");
    }
  }
}
