import artworkScene1 from "../../../public/images/artwork-scene-1.png";
import artworkScene2 from "../../../public/images/artwork-scene-2.png";
import artworkScene3 from "../../../public/images/artwork-scene-3.png";

export const heroDuration = 24;

// Seek past each letter reveal so manually selected captions are immediately readable.
export const scenes = [
  {
    id: "intro",
    lines: ["Artissimo 100"],
    start: 0.22,
    image: {
      src: artworkScene1.src,
      width: artworkScene1.width,
      height: artworkScene1.height,
    },
  },
  {
    id: "nature",
    lines: ["Art inspired by nature"],
    start: 0.5,
    image: {
      src: artworkScene2.src,
      width: artworkScene2.width,
      height: artworkScene2.height,
    },
  },
  {
    id: "final",
    lines: ["An abstract and luxurious", "interpretation of nature"],
    start: 0.87,
    image: {
      src: artworkScene3.src,
      width: artworkScene3.width,
      height: artworkScene3.height,
    },
  },
] as const;

export type HeroScene = (typeof scenes)[number];
export type SceneId = HeroScene["id"];
