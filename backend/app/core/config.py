from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://myuser:mypassword@localhost:5432/testdb"

    class Config:
        env_file = ".env"

settings = Settings()