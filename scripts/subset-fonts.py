"""Regenerate Latin webfonts with: pip install 'fonttools[woff]==4.68.0'; python scripts/subset-fonts.py."""

from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont


FONT_DIRECTORY = Path(__file__).resolve().parents[1] / "src" / "fonts"
FONT_NAMES = (
    "BeauRivage-Regular",
    "CormorantGaramond",
    "EBGaramond-Italic",
    "InterDisplay-Regular",
    "InterDisplay-SemiBold",
)
# Keep Latin accents, punctuation, currency symbols, and the playback controls.
UNICODE_RANGES = "0000-024F,1E00-1EFF,2000-206F,20A0-20CF,2100-21FF,2212,25B6,FEFF,FFFD"


def subset_font(name: str) -> None:
    source = FONT_DIRECTORY / f"{name}.woff2"
    destination = FONT_DIRECTORY / f"{name}.latin.woff2"
    options = subset.Options()

    with TTFont(source, recalcTimestamp=False) as font:
        # Both variable families are only displayed at weight 400 on this site.
        if "fvar" in font:
            instantiateVariableFont(font, {"wght": 400}, inplace=True)
        subsetter = subset.Subsetter(options=options)
        subsetter.populate(unicodes=subset.parse_unicodes(UNICODE_RANGES))
        subsetter.subset(font)
        font.flavor = "woff2"
        font.save(destination)

    print(f"{name}: {source.stat().st_size:,} → {destination.stat().st_size:,} bytes")


if __name__ == "__main__":
    for font_name in FONT_NAMES:
        subset_font(font_name)
