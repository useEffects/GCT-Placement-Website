package route

import (
	controller "go-server/src/controllers/auth"
	"github.com/gofiber/fiber/v2"
)

func HandleAuth (app fiber.Router) {
	app.Get("/:provider/login", controller.GoogleAuthLogin)
	app.Get("/:provider/callback", controller.GoogleAuthCallBack)
}
