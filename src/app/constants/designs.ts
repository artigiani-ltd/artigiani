import livingRoom from "../../../public/images/living-room.webp";
import livingRoomDetail from "../../../public/images/residence.webp";
import bedroom from "../../../public/images/bedroom-front.webp";
import bedroomDetail from "../../../public/images/bedroom-side.webp";
import lobby from "../../../public/images/hotel-reception-front.webp";
import lobbyDetail from "../../../public/images/hotel-reception-side.webp";

export const designs = [
  {
    number: "01",
    slug: "living-room",
    image: livingRoom,
    imageAlt:
      "Framed walnut wave panels above a sofa in a light-filled living room.",
    detailImage: livingRoomDetail,
    detailAlt: "An angled view of the living room’s sculptural walnut panels.",
    title: "Living Room",
    caption: "Artissimo 100",
    description: "Bring a sense of movement to everyday living.",
  },
  {
    number: "02",
    slug: "master-bedroom",
    image: bedroom,
    imageAlt: "Flowing walnut wall sculptures arranged above a bed.",
    detailImage: bedroomDetail,
    detailAlt:
      "A master bedroom with walnut wave panels and a flower-shaped mirror.",
    title: "Master Bedroom",
    caption: "Artissimo 100",
    description: "Create a quiet retreat with sculptural warmth.",
  },
  {
    number: "03",
    slug: "hotel-reception",
    image: lobby,
    imageAlt:
      "A sculptural wave installation on marble above a gold reception desk.",
    detailImage: lobbyDetail,
    detailAlt:
      "An angled view of the wave sculpture on marble beside a golden reception desk.",
    title: "Hotel Lobby",
    caption: "Artissimo 100 · Wave 4B",
    description:
      "A monumental vertical sculpture in light ash wood rises above a golden brass counter, harmonizing with the white marble backdrop of a New York residence hotel.",
  },
] as const;
