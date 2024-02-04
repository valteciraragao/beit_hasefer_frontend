type Size = number;

const px2vh = (size: Size, heigth = window.screen.height) =>
  `${(size / heigth) * 100}vh`;

export default px2vh;
