import SVGMultiPaths, { Path } from "./multiPath";

const yinYangPaths: Path[] = [
  //The outer circle path.
  {
    path: "m503.25624,109.244c118.32979,0 214.32568,89.20398 214.32568,197.8227c0,108.61877 -95.9959,196.73646 -214.32568,196.73646c-118.32984,0 -214.32574,88.20264 -214.32574,196.82133c0,108.61874 95.9959,196.73646 214.32574,196.73646c236.65957,0 428.74377,-176.32039 428.74377,-393.55782c0,-217.23746 -192.0842,-393.55774 -428.74377,-393.55774l0,-1.00139z",
    stroke: "black",
    strokeWidth: "0.5vh",
    delay: 0,
    duration: 1,
    fill: "white",
    fillDelay: 0.5,
    fillDuration: 1.8,
    zIndex: 10,
    scaleDelay: 0.5,
    scaleDuration: 1,
    scaleAmount: 1.1,
  },
  // The small circle at the top.
  {
    path: "m503.25624,245.56005c-36.99709,0 -67.00571,27.54577 -67.00571,61.50664c0,33.96092 30.00853,61.50664 67.00571,61.50664c36.99715,0 67.00562,-27.54577 67.00562,-61.50664c0,-33.96087 -30.00848,-61.50664 -67.00562,-61.50664z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.5vh",
    delay: 0.5,
    duration: 1,
    zIndex: 10,
    scaleDelay: 1.5,
    scaleDuration: 1,
    scaleAmount: 1.25,
  },
  // The small circle at the bottom.
  {
    path: "m503.25624,639.11787c36.978,0 67.00562,27.56327 67.00562,61.50664c0,33.94329 -30.0276,61.5067 -67.00562,61.5067c-36.97805,0 -67.00571,-27.56338 -67.00571,-61.5067c0,-33.94329 30.02766,-61.50664 67.00571,-61.50664z",
    stroke: "black",
    fill: "black",
    strokeWidth: "0.5vh",
    fillDelay: 0.5,
    delay: 0.5,
    duration: 2,
    zIndex: 10,
    scaleDelay: 1.5,
    scaleDuration: 1,
    scaleAmount: 1.25,
  },
  // The outer ring path.
  {
    path: "m933.38358,503.0525c0,217.07604 -193.70789,394.05237 -430.19179,394.05237c-236.48378,0 -437.19179,-175.97491 -437.19179,-393.05095c0,-217.07612 197.708,-395.05392 434.19179,-395.05392c236.4839,0 433.19179,176.97639 433.19179,394.0525z",
    stroke: "black",
    fill: "black",
    fillDelay: 2,
    strokeWidth: "0.5vh",
    delay: 0,
    duration: 2,
    scaleDelay: 0.5,
    scaleDuration: 1,
    scaleAmount: 1.1,
  },
];

export default function AnimatedYinYang() {
  return <SVGMultiPaths paths={yinYangPaths} viewBox="0 0 1000 1000" />;
}
