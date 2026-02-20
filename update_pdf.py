import fitz
import os

pdf_path = "gabriel-info/Gabriel-Porto-Resume.pdf"
doc = fitz.open(pdf_path)
page = doc[0]

# RESUME_COLOR based on font_info.txt (3030352)
RESUME_COLOR = (46/255, 46/255, 50/255) 

# --- 1. Update RPA Experience ---
rpa_rect = fitz.Rect(43, 305, 550, 318) 
page.add_redact_annot(rpa_rect, fill=(1, 1, 1))
page.apply_redactions()
# Use Helvetica (standard PDF font) - lowercase names
page.insert_text((44.1, 314.8), "Desenvolvimento de RPA com Python (Selenium) e Airflow", fontname="helv", fontsize=7.65, color=RESUME_COLOR)

# --- 2. Fix Education Section ---
edu_rect = fitz.Rect(30, 615, 580, 748)
page.add_redact_annot(edu_rect, fill=(1, 1, 1))
page.apply_redactions()

# 1. Pós em Ciência de Dados
page.insert_text((39.6, 642), "Pós-graduação em Ciência de Dados", fontname="hebo", fontsize=9.0, color=RESUME_COLOR)
page.insert_text((39.6, 653), "Universidade Estácio de Sá  •  01/2026 - Presente", fontname="helv", fontsize=7.65, color=RESUME_COLOR)

# 2. Pós em Cibersegurança
page.insert_text((39.6, 672), "Pós-graduação em Gestão na Cibersegurança Empresarial", fontname="hebo", fontsize=9.0, color=RESUME_COLOR)
page.insert_text((39.6, 683), "Universidade Estácio de Sá  •  01/2025 - Presente", fontname="helv", fontsize=7.65, color=RESUME_COLOR)
page.insert_text((38.9, 695), "•", fontname="helv", fontsize=7.65, color=RESUME_COLOR)
page.insert_text((44.1, 695), "Capacitação em proteção de dados corporativos e gestão de riscos cibernéticos.", fontname="helv", fontsize=7.65, color=RESUME_COLOR)

# 3. Bacharelado
page.insert_text((39.6, 715), "Bacharelado em Sistemas de Informação", fontname="hebo", fontsize=9.0, color=RESUME_COLOR)
page.insert_text((39.6, 726), "Universidade Estácio de Sá  •  01/2017 - 10/2021", fontname="helv", fontsize=7.65, color=RESUME_COLOR)

temp_path = "gabriel-info/Gabriel-Porto-Resume-Temp4.pdf"
doc.save(temp_path)
doc.close()

if os.path.exists(temp_path):
    os.replace(temp_path, pdf_path)
    print("PDF atualizado e layout consertado!")
else:
    print("Erro ao gerar PDF temporário.")
