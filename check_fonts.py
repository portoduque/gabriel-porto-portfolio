import fitz

doc = fitz.open("gabriel-info/Gabriel-Porto-Resume.pdf")
with open("font_info.txt", "w", encoding="utf-8") as f:
    for i, page in enumerate(doc):
        f.write(f"--- Page {i} ---\n")
        blocks = page.get_text("dict")["blocks"]
        for b in blocks:
            if "lines" in b:
                for l in b["lines"]:
                    for s in l["spans"]:
                        f.write(f"Text: {s['text']}, Font: {s['font']}, Size: {s['size']}, Color: {s['color']}, Bbox: {s['bbox']}\n")
doc.close()
