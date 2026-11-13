# Hero artwork

## Current sequence

The hero renders three full-composition PNG scenes through `next/image`:

- `public/images/artwork-scene-1.png` — monochrome introduction.
- `public/images/artwork-scene-2.png` — nature scene.
- `public/images/artwork-scene-3.png` — final color composition.

Dimensions, captions, and scene timing are defined in
`src/app/constants/hero-scenes.ts`. CSS controls the opening fade and looping
transitions. Responsive image optimization requires a Next.js-compatible server.

## Earlier enhanced panels

The following retained assets are not used by the current hero. Each is
1,254 × 1,254 pixels:

- `public/images/artissimo-left-hd.webp`
- `public/images/artissimo-right-hd.webp`

The reference is `Artigiani Version 2 - Light.mp4`. The original color panels
were extracted from its 19-second frame. The built-in image generation tool
enhanced each panel separately, and the results were encoded as WebP at quality
95. These are AI-enhanced interpretations: fine texture is reconstructed and
should not be treated as an exact record of the physical artwork. Original
high-resolution product photographs remain the best source for exact fidelity.

The earlier sequence reused these two panels with CSS color treatments. The
current sequence uses the separate scene assets listed above; no video is shipped.

## Enhancement prompt

The following prompt was used for both panels, with the corresponding original
panel supplied as the edit target:

```text
Use case: precise-object-edit.
Asset type: high-resolution artwork photograph for a luxury art website.
Primary request: Restore and enhance the sharpness and native resolution of the attached softly compressed sculptural wooden relief photograph. Produce a crisp 1536 by 1536 pixel near-square photograph, matching the input's exact framing and composition. Recover clean, delicate natural wood grain and precise sculptural edges, reducing video softness and compression.
Input image: edit target; preserve the design faithfully.
Constraints: Preserve every existing wave and ridge path, every blue channel, the dark recesses, exact shape and layout, warm brown/copper palette, lighting direction, narrow dark wooden frame, and front-facing perspective. The entire frame must fill the canvas edge to edge as in the input, without wall, margins, borders, text, watermark, or extra artwork. Do not redesign or rearrange any waves; do not add decorative details or new channels. Preserve the physical relief and realistic natural texture, not painterly illustration, plastic surfaces, excessive contrast, or sharpening halos. Change only clarity and fine texture resolution.
```

The tool returned 1,254-pixel images despite the requested size; the delivered
files preserve that native resolution rather than enlarging them further.
