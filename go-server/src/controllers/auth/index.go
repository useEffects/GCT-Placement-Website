package controller

import (
	_ "embed"
	"fmt"
	"go-server/database"

	"github.com/gofiber/fiber/v2"
	gf "github.com/shareed2k/goth_fiber"
)

//go:embed sql/login-user.sql
var findUser string

type User struct {
   Name string 
}

func GoogleAuthCallBack (ctx *fiber.Ctx) error {
    user, err := gf.CompleteUserAuth(ctx)
    if err != nil {
        return err
    }
    var User User
    fmt.Println(findUser)
    err = database.DB.QueryRow(findUser, user.Email).Scan(&User.Name)
    if err != nil {
        fmt.Println(err)
    }
    ctx.JSON(User)
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


