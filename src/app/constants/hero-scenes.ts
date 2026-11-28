import artworkScene1 from "../../../public/images/artwork-scene-1.png";
import artworkScene2 from "../../../public/images/artwork-scene-2.png";
import artworkScene3 from "../../../public/images/artwork-scene-3.png";

export const heroDuration = 24;

// Seek to the point where the artwork and its full caption are visible.
export const scenes = [
  {
    id: "intro",
    lines: ["Artissimo 100"],
    seekTime: 2.7,
    image: artworkScene1,
  },
  {
    id: "nature",
    lines: ["Art inspired by nature"],
    seekTime: 10.6,
    image: artworkScene2,
  },
  {
    id: "final",
    lines: ["An abstract and luxurious", "interpretation of nature"],
    seekTime: 21,
    image: artworkScene3,
  },
] as const;

export type HeroScene = (typeof scenes)[number];
export type SceneId = HeroScene["id"];
