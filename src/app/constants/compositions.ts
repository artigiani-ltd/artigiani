import flowerWenge from "../../../public/images/composition-flower-wenge.webp";
import rainDrops from "../../../public/images/rain-drops-gallery.webp";
import flowerRed from "../../../public/images/composition-flower-red.webp";
import waveCluster from "../../../public/images/wave-cluster-gallery.webp";
import flowerGrey from "../../../public/images/composition-flower-grey.webp";
import waveCalacatta from "../../../public/images/composition-wave-calacatta.webp";

export const compositions = [
  {
    image: flowerWenge,
    title: "Flower 6c wengè",
    dimensions: "L2310 H2280 mm | L90.94in H89.76in",
  },
  {
    image: rainDrops,
    title: "Rain drops cluster rovere",
    dimensions: "L2730 H1800 mm | L107.5in H70.87in",
  },
  {
    image: flowerRed,
    title: "Flower 5 rovere e pelle rosso mattone",
    dimensions: "L1505 H1630 mm | L59.25in H64.17in",
  },
  {
    image: waveCluster,
    title: "Wave cluster 1b mogano",
    dimensions: "L1467 H600 mm | L57.76in H23.62in",
  },
  {
    image: flowerGrey,
    title: "Flower 5 wengè e pelle grigia",
    dimensions: "L1505 H1630 mm | L59.25in H64.17in",
  },
  {
    image: waveCalacatta,
    title: "Wave cluster 1c wengè e marmo calacatta",
    dimensions: "L1517 H791 mm | L59.72in H31.14in",
  },
] as const;
