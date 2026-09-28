from pathlib import Path
from PIL import Image

SOURCE = Path("public")
OUTPUT = SOURCE / "optimized"
OUTPUT.mkdir(parents=True, exist_ok=True)

for source in sorted(SOURCE.rglob("*")):
    if source.suffix.lower() not in {".png", ".jpg", ".jpeg"} or OUTPUT in source.parents:
        continue
    relative = source.relative_to(SOURCE)
    destination = OUTPUT / relative.with_suffix(".webp")
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        image.save(destination, "WEBP", quality=82, method=6)
        print(f"{relative}\t{source.stat().st_size}\t{image.width}x{image.height}\t{destination.relative_to(SOURCE)}\t{destination.stat().st_size}")
