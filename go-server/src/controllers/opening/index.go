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
//go:embed sql/associate-opening-dept.sql
var associateOpeningDept string

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
    var opening CreateOpeningPayload
    if err := ctx.BodyParser(&opening); err != nil {
        return err
    }
    insertedRow := database.DB.QueryRow(createOpeningQuery, opening.CompanyID, opening.OpeningDescription, opening.Round1Description)
    var id uint
    err := insertedRow.Scan(&id)
    if err != nil {
        return err
    }
    for _, dept_id := range opening.DepartmentIDs {
        _, err := database.DB.Exec(associateOpeningDept, id, dept_id)        
        if err != nil {
            return err
        }
    }
    opening.ID = id
    return ctx.JSON(opening)
}
