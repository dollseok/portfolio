import styles from "../styles/Home.module.scss";

export class PageMoveSectionAnimation {
  constructor(wrapper, leftpart, rightpart) {
    this.wrapper = wrapper;
    this.leftpart = leftpart;
    this.rightpart = rightpart;

    this.length = 6;

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

    if (scrollY <= s) {
      this.leftpart.style.transform = "translateX(0)";
      this.rightpart.style.transform = "translateX(0)";
    } else if (scrollY > s && scrollY <= s + step) {
      this.leftpart.style.transform = `translateX(-12vw)`;
      this.rightpart.style.transform = `translateX(12vw)`;
    } else if (scrollY > s + step && scrollY <= s + 2 * step) {
      this.leftpart.style.transform = `translateX(-33vw)`;
      this.rightpart.style.transform = `translateX(33vw)`;
    } else if (scrollY > s + 2 * step && scrollY <= s + 3 * step) {
    }
  }
}
