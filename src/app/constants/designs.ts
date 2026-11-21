import flower from "../../../public/images/flower-gallery.webp";
import wave from "../../../public/images/wave-gallery.webp";
import waveCluster from "../../../public/images/wave-cluster-gallery.webp";
import rainDrops from "../../../public/images/rain-drops-gallery.webp";

export const designs = [
  {
    number: "01",
    image: flower,
    title: "Flower Design",
    description: "Petal-like modules joined into a radiant bloom.",
  },
  {
    number: "02",
    image: wave,
    title: "Wave Design",
    description: "Slender, sinuous lines that flow like moving water.",
  },
  {
    number: "03",
    image: waveCluster,
    title: "Wave Cluster Design",
    description: "Rippling waves gathered into rounded fields.",
  },
  {
    number: "04",
    image: rainDrops,
    title: "Rain Drops Design",
    description: "Teardrop forms falling in a quiet, steady rhythm.",
  },
] as const;
