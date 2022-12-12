package controller

import (
	_ "embed"
	"go-server/database"
	"github.com/gofiber/fiber/v2"
)

//go:embed sql/list-openings.sql
var listOpeningsQuery string
//go:embed sql/create-opening.sql
var createOpeningQuery string

func ListOpenings (ctx *fiber.Ctx) error {
    var openings []Opening 
    rows, err := database.DB.Query(listOpeningsQuery) 
    if err != nil {
        return err
    }
    for rows.Next() {
        var opening Opening
        if err := rows.Scan(&opening.ID, &opening.CompanyID, &opening.Description); err != nil {
            return err
        }
        openings = append(openings, opening)
    }
    return ctx.JSON(openings)
}

func PostOpening (ctx *fiber.Ctx) error {
    var opening Opening
    if err := ctx.BodyParser(&opening); err != nil {
        return err
    }
    _, err := database.DB.Exec(createOpeningQuery, opening.CompanyID, opening.Description)
    if err != nil {
        return err
    }
    return ctx.SendString("Opening added to database successfully !")
}

