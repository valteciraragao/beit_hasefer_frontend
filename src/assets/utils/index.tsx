type Size = number;

const px2vw = (size: Size, width = 1440) => `${(size / width) * 100}vw`;

export default px2vw;
