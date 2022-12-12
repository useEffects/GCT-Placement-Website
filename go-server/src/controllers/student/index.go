package controller

import (
	_ "embed"
	"go-server/database"

	"github.com/gofiber/fiber/v2"
)

//go:embed sql/list-students.sql
var listStudentsQuery string

func ListStudents (ctx *fiber.Ctx) error {
    var students []Student
    rows, err := database.DB.Query(listStudentsQuery)
    if err != nil {
        return err
    }
    for rows.Next() {
        var student Student
        err := rows.Scan(&student.ID, &student.Name, &student.Roll, &student.GctMail, &student.DOB, &student.Gender, &student.DepartmentID)
        if err != nil {
            return err
        }
        students = append(students, student)
    }
    return ctx.JSON(students)
}
