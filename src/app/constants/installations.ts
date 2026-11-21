import masterSuite from "../../../public/images/bedroom-side.webp";
import bedroom from "../../../public/images/bedroom-front.webp";
import residence from "../../../public/images/residence.webp";

export const installations = [
  {
    image: masterSuite,
    title: "Private Residence — Master Suite",
    description: "Custom walnut Artissimo 100 installation — Milan",
    alt: "A private master suite with sculptural walnut panels and a flower mirror.",
  },
  {
    image: bedroom,
    title: "Private Residence — Sculptural Headboard",
    description: "A bespoke composition of flowing walnut panels.",
    alt: "Symmetrical walnut wave panels above a bed in a private residence.",
  },
  {
    image: residence,
    title: "Private Residence — Living Space",
    description: "Modular wall art integrated into a residential interior.",
    alt: "A light-filled living space with sculptural timber wall art.",
  },
] as const;
