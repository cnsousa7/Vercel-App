from pathlib import Path
from PIL import Image

source = Path("public/CNSOUSATEC-logo-restored.png")
destination = Path("public/CNSOUSATEC-logo-restored.webp")

with Image.open(source) as image:
    image.save(destination, "WEBP", quality=92, method=6)
    print(f"{source}: {image.width}x{image.height} -> {destination}: {destination.stat().st_size} bytes")
