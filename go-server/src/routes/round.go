package route

import (
	controller "go-server/src/controllers/round"

	"github.com/gofiber/fiber/v2"
)

func HandleRound (app fiber.Router) {
	app.Post("/apply", controller.ApplyRound)
	app.Get("/:company/:round", controller.GetStudents)
}
