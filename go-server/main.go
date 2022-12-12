package main

import (
	"go-server/database"
	"go-server/src/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/providers/google"
)

func main () {

    godotenv.Load()
    
    PORT := os.Getenv("PORT")
    GOOGLE_CLIENT_ID := os.Getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET := os.Getenv("GOOGLE_CLIENT_SECRET")

    goth.UseProviders(
        google.New(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, "http://localhost:"+PORT+"/api/auth/google/callback"),
    )
    
    database.Connect()
    app := fiber.New()
    route.SetupRoutes(app)
    app.Listen(":" + PORT)
}
