import styles from "../styles/Home.module.scss";

export class IntroduceSectionAnimation {
  constructor(
    wrapper,
    sticky,
    modelImage,
    firstText,
    secondText,
    thirdText,
    hightlight
  ) {
    this.wrapper = wrapper;
    this.sticky = sticky;
    this.firstText = firstText;
    this.secondText = secondText;
    this.thirdText = thirdText;
    this.background = modelImage;
    this.hightlight = hightlight;

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

    if (window.scrollY <= s) {
      this.firstText.style.opacity = 0;
      this.secondText.style.opacity = 0;
      this.background.forEach((background) => {
        background.style.opacity = 0.5;
      });
    } else if (scrollY > s && scrollY <= s + step) {
      this.secondText.style.opacity = 0;
      this.firstText.style.opacity = 1;
      this.firstText.style.width = `${(400 * (scrollY - s)) / step}px`;
      this.firstText.classList.add(`${styles.typing_animation}`);
      setTimeout(() => {
        this.background.forEach((background) => {
          background.style.opacity = 0;
        });
      }, 1500);
    } else if (scrollY > s + step && scrollY <= s + 2 * step) {
      this.firstText.style.opacity = 1;
      this.secondText.style.opacity = 0;
      this.firstText.style.width = `${
        400 - (400 * (scrollY - (s + step))) / step
      }px`;
    } else if (scrollY > s + 2 * step && scrollY <= s + 3 * step) {
      this.firstText.style.width = 0;
      this.firstText.style.opacity = 0;
      this.secondText.style.opacity = 1;
      this.secondText.style.width = `${
        (200 * (scrollY - (s + 2 * step))) / step
      }px`;
    } else if (scrollY > s + 3 * step && scrollY <= s + 4 * step) {
      this.firstText.style.opacity = 0;
      this.secondText.style.opacity = 1;
      this.thirdText.style.opacity = 0;
      this.secondText.style.width = `${
        200 - (200 * (scrollY - (s + 3 * step))) / step
      }px`;
    } else if (scrollY > s + 4 * step && scrollY <= s + 5 * step) {
      this.firstText.style.opacity = 0;
      this.secondText.style.opacity = 0;
      this.thirdText.style.opacity = 1;
      this.thirdText.style.width = `${
        (280 * (scrollY - (s + 4 * step))) / step
      }px`;
    } else if (scrollY > s + 5 * step && scrollY <= s + 6 * step) {
      this.thirdText.style.width = "280px";
      this.hightlight.style.color = "#0040ff";
    } else if (scrollY > e) {
      this.background.forEach((background) => {
        background.style.opacity = 0;
      });
    }
  }
}

// // 마우스 스크롤 막는 이벤트

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// var supportsPassive = false;
// try {
//   window.addEventListener(
//     "test",
//     null,
//     Object.defineProperty({}, "passive", {
//       get: function () {
//         supportsPassive = true;
//       },
//     })
//   );
// } catch (e) {}

// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent =
//   "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// // call this to Disable
// function disableScroll() {
//   window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
//   window.addEventListener("keydown", preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// function enableScroll() {
//   window.removeEventListener("DOMMouseScroll", preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
//   window.removeEventListener("touchmove", preventDefault, wheelOpt);
//   window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
// }
