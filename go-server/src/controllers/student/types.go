package controller

import (
    "time"
)

type Student struct {
    ID uint `json:"id" db:"id"`
    Name string `json:"name" db:"name"`
    Roll string `json:"roll" db:"roll"`
    GctMail string `json:"gct_mail" db:"gct_mail"`
    DOB time.Time `json:"dob" db:"dob"`
    Gender string `json:"gender" dob:"gender"`
    DepartmentID uint `json:"department_id" db:"department_id"`
}
