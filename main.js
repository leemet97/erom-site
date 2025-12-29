document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     1. HERO SLIDER (section1)
  ========================== */
  const track = document.querySelector(".track");
  const slides = document.querySelectorAll(".track .slide");
  const prevBtn = document.querySelector(".prearrow");
  const nextBtn = document.querySelector(".nextarrow");

  if (track && slides.length) {
    const total = slides.length;
    let index = 1;
    const STEP = 100;
    const transition = "transform 0.4s ease";

    function move() {
      track.style.transform = `translateX(${-STEP * index}%)`;
    }

    function next() {
      index++;
      track.style.transition = transition;
      move();
    }

    function prev() {
      index--;
      track.style.transition = transition;
      move();
    }

    function loopFix() {
      if (index === total - 1) {
        track.style.transition = "none";
        index = 1;
        move();
        track.offsetWidth;
        track.style.transition = transition;
      }

      if (index === 0) {
        track.style.transition = "none";
        index = total - 2;
        move();
        track.offsetWidth;
        track.style.transition = transition;
      }
    }

    move();

    nextBtn && nextBtn.addEventListener("click", next);
    prevBtn && prevBtn.addEventListener("click", prev);
    track.addEventListener("transitionend", loopFix);

    setInterval(next, 5000);
  }

  /* =========================
     2. SCROLL INTERACTION
     - section2 icons
     - section3 text
  ========================== */
  const section2 = document.querySelector(".section2");
  const section3 = document.querySelector(".section3");

  const iconBoxes = document.querySelectorAll(
    ".iconBox1, .iconBox2, .iconBox3, .iconBox4, .iconBox5"
  );

  const leftText = document.querySelector(".section3 .leftTextbox");
  const rightText = document.querySelector(".section3 .rightTextbox");

  const NAV_HEIGHT = 100;

  function onScroll() {
    const scrollY = window.scrollY;

    /* section2 아이콘 등장 */
    if (section2) {
      const sec2Top = section2.offsetTop;
      const sec2Bottom = sec2Top + section2.offsetHeight;

      if (scrollY >= sec2Top - NAV_HEIGHT && scrollY < sec2Bottom) {
        iconBoxes.forEach((el) => el.classList.add("iconBox_on"));
      } else {
        iconBoxes.forEach((el) => el.classList.remove("iconBox_on"));
      }
    }

    /* section3 텍스트 등장 */
    if (section3 && leftText && rightText) {
      const triggerPoint = section3.offsetTop - window.innerHeight * 0.6;

      if (scrollY >= triggerPoint) {
        leftText.classList.add("on");
        rightText.classList.add("on");
      } else {
        leftText.classList.remove("on");
        rightText.classList.remove("on");
      }
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll);
});
