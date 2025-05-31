from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import user as schemas
from app.db.session import SessionLocal
from app.crud import user as crud

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/signup", response_model=schemas.UserOut)
def signup(user_in: schemas.UserCreate, db: Session = Depends(get_db)):
    existing_user_email = crud.get_user_by_email(db, user_in.email)
    existing_user_username = crud.get_user_by_username(db, user_in.username)
    if existing_user_email:
        raise HTTPException(status_code=400, detail="Email already registered")
    if existing_user_username:
        raise HTTPException(status_code=400, detail="Username already taken")
    return crud.create_user(db, user_in)

@router.post("/login")
def login(user_in: schemas.UserCreate, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, user_in.email)
    if not user or user.password != user_in.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "user_id": user.id}
