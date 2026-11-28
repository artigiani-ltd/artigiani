import type { StaticImageData } from "next/image";
import type { designs } from "../../constants/designs";
import livingRoomPerspective from "../../../../public/images/residence.webp";
import bedroomPerspective from "../../../../public/images/bedroom-side.webp";
import receptionPerspective from "../../../../public/images/wave-gallery.webp";

type DesignSlug = (typeof designs)[number]["slug"];

type DesignDetail = {
  pageTitle: string;
  category: string;
  materials: string;
  storyTitle: string;
  summary: string;
  paragraphs: readonly string[];
  closing: string;
  perspectiveImage: StaticImageData;
  perspectiveAlt: string;
};

export const designDetails = {
  "living-room": {
    pageTitle: "Living Room",
    category: "Residential — Living & dining spaces",
    materials: "Hand-Sculpted Mahogany (Mogano) & Light Marble",
    storyTitle: "Spatial Harmony in Mahogany & Marble",
    summary:
      "A dual architectural intervention balancing open living flow with refined sculptural warmth.",
    paragraphs: [
      "In this living environment, the designer’s vision unfolds through a dual architectural dialogue, uniting spatial openness with rich, tactile craftsmanship.",
      "To divide the room without sacrificing its airy spaciousness, a low partition wall is clad in custom Artissimo 100 panels. Left bare, a low divider could feel abrupt or utilitarian; framed in sculpted mahogany motifs, it becomes a warm, rhythmic focal point that anchors the seating area while allowing light and sightlines to travel freely across the room.",
    ],
    closing:
      "The carved forms continue across the adjacent dining space. Natural timber, light marble, and soft upholstery come together in a continuous composition, giving each area its own identity while preserving the openness of the room.",
    perspectiveImage: livingRoomPerspective,
    perspectiveAlt:
      "An angled view of the living room’s sculptural mahogany panels.",
  },
  "master-bedroom": {
    pageTitle: "Master Bedroom",
    category: "Residential — Private master suite",
    materials: "Hand-Sculpted Canaletto Walnut Wood",
    storyTitle: "Ascending Forms in Canaletto Walnut",
    summary:
      "Fluid forms rise above the bed, transforming a private retreat with sculptural warmth.",
    paragraphs: [
      "Designed for a space of rest, this installation draws on the flowing lines of the Artissimo 100 collection. Carved wooden forms climb above the bed, creating a quiet sense of movement across the wall.",
      "The composition brings the headboard and surrounding architecture into dialogue. Natural grain and curved profiles catch the light, revealing depth and texture without overwhelming the room’s restful palette.",
    ],
    closing:
      "Within this layered interior, the warm sculptural language is echoed in the adjoining space, drawing the bedroom into a continuous conversation between art, materials, and everyday living.",
    perspectiveImage: bedroomPerspective,
    perspectiveAlt:
      "A master bedroom with walnut wave panels and a flower-shaped mirror.",
  },
  "hotel-reception": {
    pageTitle: "Hotel Reception",
    category: "Hospitality — Public & reception spaces",
    materials: "Light Oak Wood, White Marble & Brushed Brass",
    storyTitle: "Vertical Grandeur for Hospitality",
    summary:
      "A sculptural focal point brings rhythm and natural warmth to the reception space.",
    paragraphs: [
      "The elegant versatility of Artissimo 100 creates a welcoming focal point within this hotel reception. Repeated wooden forms rise across the marble wall, introducing movement and a tactile counterpoint to the stone.",
      "Behind the curved, golden reception desk, the installation establishes a clear visual centre. Its flowing lines and pale timber tones bring warmth to the architectural setting, while light and shadow reveal the depth of each sculpted form.",
    ],
    closing:
      "Rising above the reception desk, the flowing composition turns the wall into an invitation to pause, bringing a natural rhythm to the experience of arrival.",
    perspectiveImage: receptionPerspective,
    perspectiveAlt:
      "A sculptural wave installation on marble above a gold reception desk.",
  },
} as const satisfies Record<DesignSlug, DesignDetail>;
