export class ScrollbarAnimation {
  box1: HTMLElement;
  box2: HTMLElement;
  box3: HTMLElement;
  box4: HTMLElement;
  box5: HTMLElement;
  box6: HTMLElement;
  box7: HTMLElement;
  box8: HTMLElement;
  box9: HTMLElement;
  box10: HTMLElement;
  box11: HTMLElement;
  box12: HTMLElement;
  box13: HTMLElement;
  length: number;
  start: number;
  end: number;
  step: number;

  constructor(
    box1: HTMLElement,
    box2: HTMLElement,
    box3: HTMLElement,
    box4: HTMLElement,
    box5: HTMLElement,
    box6: HTMLElement,
    box7: HTMLElement,
    box8: HTMLElement,
    box9: HTMLElement,
    box10: HTMLElement,
    box11: HTMLElement,
    box12: HTMLElement,
    box13: HTMLElement
  ) {
    this.box1 = box1;
    this.box2 = box2;
    this.box3 = box3;
    this.box4 = box4;
    this.box5 = box5;
    this.box6 = box6;
    this.box7 = box7;
    this.box8 = box8;
    this.box9 = box9;
    this.box10 = box10;
    this.box11 = box11;
    this.box12 = box12;
    this.box13 = box13;

    this.length = 13;
    this.start = 0;
    this.end = 0;
    this.step = 0;
  }
  init() {
    this.start = 0;
    this.end = window.innerHeight * 13;
    this.step = (this.end - this.start) / this.length;
  }
  animate() {
    const s = this.start;
    const e = this.end;
    const step = this.step;
    if (scrollY > s && scrollY <= s + step) {
      this.box1.style.background = "black";
    } else if (scrollY > s + step && scrollY <= s + 2 * step) {
      this.box2.style.background = "black";
    } else if (scrollY > s + 2 * step && scrollY <= s + 3 * step) {
      this.box3.style.background = "black";
    } else if (scrollY > s + 3 * step && scrollY <= s + 4 * step) {
      this.box4.style.background = "black";
    } else if (scrollY > s + 4 * step && scrollY <= s + 5 * step) {
      this.box5.style.background = "black";
    } else if (scrollY > s + 5 * step && scrollY <= s + 6 * step) {
      this.box6.style.background = "black";
    } else if (scrollY > s + 6 * step && scrollY <= s + 7 * step) {
      this.box7.style.background = "black";
    } else if (scrollY > s + 7 * step && scrollY <= s + 8 * step) {
      this.box8.style.background = "black";
    } else if (scrollY > s + 8 * step && scrollY <= s + 9 * step) {
      this.box9.style.background = "black";
    } else if (scrollY > s + 9 * step && scrollY <= s + 10 * step) {
      this.box10.style.background = "black";
    } else if (scrollY > s + 10 * step && scrollY <= s + 11 * step) {
      this.box11.style.background = "black";
    } else if (scrollY > s + 11 * step && scrollY <= s + 12 * step) {
      this.box12.style.background = "black";
    } else if (scrollY > s + 12 * step && scrollY <= s + 13 * step) {
      this.box13.style.background = "black";
    }
  }
}
