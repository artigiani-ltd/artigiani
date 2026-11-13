export const heroDuration = 24;

// Match the first fully visible caption of each scene in globals.css.
export const scenes = [
  {
    id: "intro",
    lines: ["Artissimo 100"],
    start: 0.22,
    image: { src: "/images/artwork-scene-1.png", width: 3799, height: 1853 },
  },
  {
    id: "nature",
    lines: ["Art inspired by nature"],
    start: 0.5,
    image: { src: "/images/artwork-scene-2.png", width: 3805, height: 1861 },
  },
  {
    id: "final",
    lines: ["An abstract and luxurious", "interpretation of nature"],
    start: 0.72,
    image: { src: "/images/artwork-scene-3.png", width: 3800, height: 1858 },
  },
] as const;

export type HeroScene = (typeof scenes)[number];
export type SceneId = HeroScene["id"];
