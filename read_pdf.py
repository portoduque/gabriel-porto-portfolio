import fitz

doc = fitz.open("gabriel-info/Gabriel-Porto-Resume.pdf")
with open("out.txt", "w", encoding="utf-8") as f:
    for i, page in enumerate(doc):
        f.write(f"--- Page {i} ---\n")
        blocks = page.get_text("dict")["blocks"]
        for b in blocks:
            if "lines" in b:
                for l in b["lines"]:
                    for s in l["spans"]:
                        f.write(f"Bbox: {s['bbox']}, Text: {s['text']}\n")
