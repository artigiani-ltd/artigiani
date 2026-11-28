import livingRoom from "../../../public/images/living-room.webp";
import livingRoomDetail from "../../../public/images/residence.webp";
import bedroom from "../../../public/images/bedroom-front.webp";
import bedroomDetail from "../../../public/images/bedroom-side.webp";
import lobby from "../../../public/images/wave-gallery.webp";
import timberDetail from "../../../public/images/nature-timber-detail.webp";

export const designs = [
  {
    number: "01",
    image: livingRoom,
    imageAlt:
      "Framed walnut wave panels above a sofa in a light-filled living room.",
    detailImage: livingRoomDetail,
    detailAlt: "An angled view of the living room’s sculptural walnut panels.",
    title: "Living Room",
    description: "Bring a sense of movement to everyday living.",
  },
  {
    number: "02",
    image: bedroom,
    imageAlt: "Flowing walnut wall sculptures arranged above a bed.",
    detailImage: bedroomDetail,
    detailAlt:
      "A master bedroom with walnut wave panels and a flower-shaped mirror.",
    title: "Master Bedroom",
    description: "Create a quiet retreat with sculptural warmth.",
  },
  {
    number: "03",
    image: lobby,
    imageAlt:
      "A sculptural wave installation on marble above a gold reception desk.",
    detailImage: timberDetail,
    detailAlt:
      "A close view of the natural grain and curves of a timber sculpture.",
    title: "Hotel Lobby",
    description: "Shape a memorable welcome through natural forms.",
  },
] as const;
