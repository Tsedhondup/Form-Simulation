import { EmojiComponent } from "./emoji-component.js";

export class EmailComponent {
  focusHanlder(val) {
    const emailInput = document.querySelector("#email");
    const smileEmo = document.querySelector(".fa-smile");
    const sadEmo = document.querySelector(".fa-frown");
    new EmojiComponent().renderEmojisOpacity();
    emailInput.classList.add("js_focus-color");

    // remove secure headline
    const secureTag = document.querySelector(".secure");
    secureTag.classList.remove("js_color-lime");
    // showing emoji for in corret using the class
    emailInput.classList.forEach((item) => {
      if (item === "js_back-red-color") {
        new EmojiComponent().renderEmojisClass();
        sadEmo.classList.remove("dis-none");
      }
    });

    // showing correct email using regex
    const emailPattern = /[^@]+@[^@]+/; // regularExpression
    if (emailPattern.test(val)) {
      new EmojiComponent().renderEmojisClass();
      smileEmo.classList.remove("dis-none");
    }
  }
  blurHandler(val) {
    const emailInput = document.querySelector("#email");
    /*-- individuals --*/
    const smileEmo = document.querySelector(".fa-smile");
    const sadEmo = document.querySelector(".fa-frown");

    const emailPattern = /[^@]+@[^@]+/; // regularExpression

    if (emailPattern.test(val) && val) {
      // show msg
      const msgTag = document.querySelector(".em-msg p");
      msgTag.textContent = "";
      // show emoji
      new EmojiComponent().renderEmojisClass();
      smileEmo.classList.remove("dis-none");
      // render background-color
      emailInput.classList.remove("js_back-green-color");
      emailInput.classList.remove("js_back-red-color");
    } else {
      // show msg
      const msgTag = document.querySelector(".em-msg p");
      msgTag.textContent = "Invalid email Id!";
      // show emoji
      new EmojiComponent().renderEmojisClass();
      sadEmo.classList.remove("dis-none");

      //  render background-color
      emailInput.classList.add("js_back-red-color");
      emailInput.classList.remove("js_back-green-color");
    }
  }

  validateEmail(val) {
    const emailInput = document.querySelector("#email");
    /*-- individuals --*/
    const smileEmo = document.querySelector(".fa-smile");
    const sadEmo = document.querySelector(".fa-frown");

    let inputLength = val.length;

    /**-----* validating the email charator *-----**/
    if (inputLength >= 4) {
      const emailPattern = /[^@]+@[^@]+/; // regularExpression
      if (emailPattern.test(val)) {
        // show msg
        const msgTag = document.querySelector(".em-msg p");
        msgTag.textContent = "";

        // show emoji
        new EmojiComponent().renderEmojisClass();
        smileEmo.classList.remove("dis-none");

        // render background-color
        emailInput.classList.add("js_back-green-color");
        emailInput.classList.remove("js_back-red-color");

        // remove focus classes
        emailInput.classList.remove("js_focus-color");
      } else {
        // show msg
        const msgTag = document.querySelector(".em-msg p");
        msgTag.textContent = "Invalid email Id!";

        // show emoji
        new EmojiComponent().renderEmojisClass();
        sadEmo.classList.remove("dis-none");

        //  render background-color
        emailInput.classList.add("js_back-red-color");
        emailInput.classList.remove("js_back-green-color");

        // remove focus classes
        emailInput.classList.remove("js_focus-color");
      }
    }
  }
}
