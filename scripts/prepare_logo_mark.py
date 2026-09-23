from pathlib import Path
from PIL import Image

source = Path("public/CNSOUSATEC-logo-restored.png")
mark_png = Path("public/CNSOUSATEC-mark.png")
mark_webp = Path("public/CNSOUSATEC-mark.webp")

with Image.open(source) as image:
    # Crop the complete circular emblem and central wordmark, excluding the separate
    # CNSOUSATEC wordmark below the emblem. The nearly square crop preserves geometry.
    crop = image.crop((95, 15, 1200, 1110))
    crop = crop.resize((1024, 1024), Image.Resampling.LANCZOS)
    crop.save(mark_png, "PNG", optimize=True)
    crop.save(mark_webp, "WEBP", quality=94, method=6)
    print(f"{mark_png}: {crop.size}, {mark_png.stat().st_size} bytes")
    print(f"{mark_webp}: {crop.size}, {mark_webp.stat().st_size} bytes")
