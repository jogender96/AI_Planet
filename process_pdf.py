import fitz  # PyMuPDF

def process_pdf(file_path):
    text = ""
    try:
        with fitz.open(file_path) as doc:
            for page_num in range(doc.page_count):
                page = doc.load_page(page_num)
                text += page.get_text()
    except Exception as e:
        print(f"Error processing PDF: {e}")
        return None

    return text
