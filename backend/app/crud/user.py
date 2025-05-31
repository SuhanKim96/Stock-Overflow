from sqlalchemy.orm import Session
from app.db import models
from app.schemas import user as schemas

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

def create_user(db: Session, user_in: schemas.UserCreate):
    db_user = models.User(
        username=user_in.username,
        email=user_in.email,
        password=user_in.password  # No hashing for now
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
