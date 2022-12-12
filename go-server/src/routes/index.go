package route

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func SetupRoutes (app *fiber.App) {
    
    app.Get("/", func(c *fiber.Ctx) error {
	return c.SendString("Hello World! from Go Fiber")
    })
    api := app.Group("/api", logger.New())
    auth := api.Group("/auth")
    company := api.Group("/company")
    opening := api.Group("/opening")
    student := api.Group("/student")

    HandleAuth(auth)
    HandleCompany(company)
    HandleOpening(opening)
    HandleStudent(student)
} 


