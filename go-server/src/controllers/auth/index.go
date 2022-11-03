package controller

import (

	"github.com/gofiber/fiber/v2"
	gf "github.com/shareed2k/goth_fiber"
)

func GoogleAuthCallBack (ctx *fiber.Ctx) error {
    user, err := gf.CompleteUserAuth(ctx)
    if err != nil {
        return err
    }
    ctx.JSON(user)
    return nil
}

func GoogleAuthLogin (ctx *fiber.Ctx) error {
    if gothUser, err := gf.CompleteUserAuth(ctx); err == nil {
        ctx.JSON(gothUser)
    } else {
        gf.BeginAuthHandler(ctx)
    }
    return nil
}


