package controller

import (
	_ "embed"
	"go-server/database"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

//go:embed sql/add-student-round.sql
var addStudentRoundQuery string
//go:embed sql/get-students.sql
var getStudentsQuery string

func ApplyRound (ctx *fiber.Ctx) error {
   var payload StudentRound 
   if err := ctx.BodyParser(&payload); err != nil {
        return err
   }
   var id uint
   err := database.DB.QueryRow(addStudentRoundQuery, payload.StudentID, payload.RoundID).Scan(&id)
   if err != nil {
        return err
   }
   payload.ID = id
   return ctx.JSON(payload)
}

func GetStudents (ctx *fiber.Ctx) error {
    var datas []StudentsRoundsCompanies
    company_param := ctx.Params("company")
    round_param := ctx.Params("round")
    c_id, _ := strconv.ParseInt(company_param, 10, 64)
    r_id, _ := strconv.ParseInt(round_param, 10, 64)
    rows, err := database.DB.Query(getStudentsQuery, c_id, r_id)
    if err != nil {
        return err
    }
    for rows.Next() {
       var data StudentsRoundsCompanies 
       err := rows.Scan(&data.Name, &data.Department)
       if err != nil {
            return err
       }
       datas = append(datas, data)
    }
    return ctx.JSON(datas)
}
