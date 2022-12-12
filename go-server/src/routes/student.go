package route

import (
	controller "go-server/src/controllers/student"

	"github.com/gofiber/fiber/v2"
)

func HandleStudent (app fiber.Router) {
	app.Get("/list", controller.ListStudents)	
}
