export class EmojiComponent {
  renderEmojisClass() {
    const emojis = document.querySelectorAll("i");
    emojis.forEach((item) => {
      item.classList.add("dis-none");
    });
  }

  renderEmojisOpacity() {
    const emojis = document.querySelectorAll("i");
    emojis.forEach((item) => {
      item.classList.add("js_opacity");
    });
  }
}
