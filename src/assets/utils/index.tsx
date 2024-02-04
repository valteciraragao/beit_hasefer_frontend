type Size = number;

const px2vw = (size: Size, width = window.screen.width) =>
  `${(size / width) * 100}vw`;

export default px2vw;
