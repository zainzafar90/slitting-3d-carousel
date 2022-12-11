import "./style.css";

const baseUrl = "./img";

const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 10, z: -4 },
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: -10, z: -4 },
];

const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");

const translateImage = (target, p) => {
  target.style.transform = `translate3d(${p.x}vmin, 0, ${p.z}vmin)`;
};

const initCards = (c, side, index, perspectives) => {
  c.style.backgroundImage = `url(${baseUrl}/card-${side}-0${index + 1}.webp)`;

  if (index === 5) {
    c.style.opacity = 0;
  } else {
    translateImage(c, perspectives[index]);
  }

  c.dataset.counter = (index + 1).toString();
};

leftCards.forEach((c, index) => {
  initCards(c, "left", index, leftPerspectives);
});

rightCards.forEach((c, index) => {
  initCards(c, "right", index, rightPerspectives);
});

const animateCards = (c, perspectives) => {
  const count = parseInt(c.dataset.counter);
  if (count === 6) {
    c.style.opacity = 0;
  } else {
    c.style.opacity = 1;
  }

  translateImage(c, perspectives[count - 1]);
  c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
};

const loop = () => {
  setInterval(() => {
    leftCards.forEach((c) => {
      animateCards(c, leftPerspectives);
    });

    rightCards.forEach((c) => {
      animateCards(c, rightPerspectives);
    });
  }, 750);
};

loop();
