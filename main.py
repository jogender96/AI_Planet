from fastapi import FastAPI, UploadFile, File, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Document
from pdf_processor import process_pdf
from typing import List

app = FastAPI()

# Dependency for database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...), db: Session = Depends(get_db)):
    # Save file to server (or cloud storage)
    # Example: Save to local filesystem
    with open(file.filename, "wb") as f:
        f.write(file.file.read())

    # Process PDF to extract text and store metadata in database
    text_content = process_pdf(file.filename)
    document = Document(filename=file.filename, text_content=text_content)
    db.add(document)
    db.commit()
    db.refresh(document)

    return {"filename": file.filename, "message": "Upload successful"}

@app.get("/documents/", response_model=List[Document])
async def get_documents(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return db.query(Document).offset(skip).limit(limit).all()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
