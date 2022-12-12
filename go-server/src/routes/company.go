package route

import (
	controller "go-server/src/controllers/companies"

	"github.com/gofiber/fiber/v2"
)

func HandleCompany (app fiber.Router) {
	app.Get("/list", controller.ListCompanies)
	app.Post("/post", controller.PostCompany)
}
