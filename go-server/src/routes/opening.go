package route

import (
	controller "go-server/src/controllers/opening"
	"github.com/gofiber/fiber/v2"
)

func HandleOpening (app fiber.Router) {
	app.Get("/list", controller.ListOpenings)
	app.Post("/post", controller.PostOpening)
}
