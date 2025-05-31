from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://username:password@localhost:5432/your_db"

    class Config:
        env_file = ".env"

settings = Settings()