import styles from "../styles/Home.module.scss";

export class ContactSectionAnimation {
  constructor(wrapper, background) {
    this.wrapper = wrapper;
    this.background = background;

    this.length = 4;

    this.start = 0;
    this.end = 0;
    this.step = 0;
  }
  init() {
    this.start = this.wrapper.offsetTop;
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight;
    this.step = (this.end - this.start) / this.length;
  }
  animate() {
    const s = this.start;
    const e = this.end;
    const step = this.step;

    if (scrollY <= s - 2 * step) {
      console.log(1);
      this.background.style.opacity = 0;
      this.background.style.background = "linear-gradient(0deg, #ffffff)";
    } else if (scrollY > s - step && scrollY <= s) {
      this.background.style.background =
        "linear-gradient(0deg, rgba(188,34,195,1) 0%, rgba(223,148,226,0.7) 25%, rgba(255,255,255,0.7) 35%,rgba(126,248,255,0.7) 45%, rgba(0,241,255,1) 100%)";
      this.background.style.opacity = 0.5;
      console.log(2);
    } else if (scrollY > s && scrollY <= s + step) {
      this.background.style.background =
        "linear-gradient(90deg, rgba(0,64,255,0.9) 0%, rgba(0,64,255,1) 100%)";

      this.background.style.opacity = 1;
      console.log(3);
    } else if (scrollY > s + step && scrollY <= e) {
      this.background.style.opacity = 1;
    }
  }
}
