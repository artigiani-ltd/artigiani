import flower1a from "../../../public/images/flower-composition-1.png";
import flower1b from "../../../public/images/flower-composition-2.png";
import flower2 from "../../../public/images/flower-composition-3.png";
import wave1a from "../../../public/images/wave-composition-1.png";
import wave1b from "../../../public/images/wave-composition-2.png";
import wave1c from "../../../public/images/wave-composition-3.png";
import cluster1b from "../../../public/images/wave-cluster-composition-1.png";
import cluster1c from "../../../public/images/wave-cluster-composition-2.png";
import cluster3c from "../../../public/images/wave-cluster-composition-3.png";
import rainDrops1 from "../../../public/images/rain-drops-composition-1.png";
import rainDrops2 from "../../../public/images/rain-drops-composition-2.png";
import rainDrops3 from "../../../public/images/rain-drops-composition-3.png";

export const compositionFamilies = [
  {
    name: "Flower",
    inspiration: "Inspired by the water lily",
    count: 12,
    cataloguePage: 1,
    pieces: [
      {
        number: "1a",
        image: flower1a,
        millimeters: "1530 × 2025",
        inches: "60.24 × 79.72",
      },
      {
        number: "1b",
        image: flower1b,
        millimeters: "1535 × 1535",
        inches: "60.43 × 60.43",
      },
      {
        number: "2",
        image: flower2,
        millimeters: "2237 × 2237",
        inches: "88.07 × 88.07",
      },
    ],
  },
  {
    name: "Wave",
    inspiration: "Inspired by sand and sea",
    count: 18,
    cataloguePage: 3,
    pieces: [
      {
        number: "1a",
        image: wave1a,
        millimeters: "2130 × 2130",
        inches: "83.86 × 83.86",
      },
      {
        number: "1b",
        image: wave1b,
        millimeters: "2130 × 2130",
        inches: "83.86 × 83.86",
      },
      {
        number: "1c",
        image: wave1c,
        millimeters: "2130 × 2130",
        inches: "83.86 × 83.86",
      },
    ],
  },
  {
    name: "Wave Cluster",
    inspiration: "Inspired by unfurling leaves",
    count: 12,
    cataloguePage: 5,
    pieces: [
      {
        number: "1b",
        image: cluster1b,
        millimeters: "1467 × 600",
        inches: "57.76 × 23.62",
      },
      {
        number: "1c",
        image: cluster1c,
        millimeters: "1517 × 791",
        inches: "59.72 × 31.14",
      },
      {
        number: "3c",
        image: cluster3c,
        millimeters: "1340 × 1340",
        inches: "52.76 × 52.76",
      },
    ],
  },
  {
    name: "Rain Drops",
    inspiration: "Inspired by dew on petals",
    count: 4,
    cataloguePage: 2,
    pieces: [
      {
        number: "1",
        image: rainDrops1,
        millimeters: "1990 × 1800",
        inches: "78.35 × 70.87",
      },
      {
        number: "2",
        image: rainDrops2,
        millimeters: "1800 × 2400",
        inches: "70.87 × 94.49",
      },
      {
        number: "3",
        image: rainDrops3,
        millimeters: "2400 × 2075",
        inches: "94.49 × 81.69",
      },
    ],
  },
] as const;
