package controller

import (
	_ "embed"
	"go-server/database"

	"github.com/gofiber/fiber/v2"
)

//go:embed sql/list-companies.sql
var listCompaniesQuery string
//go:embed sql/create-company.sql
var createCompanyQuery string

func ListCompanies (ctx *fiber.Ctx) error {
    var companies []Company
   rows, err := database.DB.Query(listCompaniesQuery) 
   if err != nil {
        return err
   }
   for rows.Next() {
        var company Company
        if err := rows.Scan(&company.ID, &company.Name, &company.ImgSrc); err != nil {
            return err
        }
        companies = append(companies, company)
   }
   return ctx.JSON(companies)
}

func PostCompany (ctx *fiber.Ctx) error {
   var company Company
   if err := ctx.BodyParser(&company); err != nil {
        return err
   }
    _, err := database.DB.Exec(createCompanyQuery, company.Name, company.ImgSrc)
    if err != nil {
        return err
    }
    return ctx.SendString("Company added to database successfully")
}

