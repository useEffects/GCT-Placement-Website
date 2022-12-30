package controller

type StudentRound struct {
    ID uint `json:"id" db:"id"`
    StudentID uint `json:"student_id" db:"student_id"`
    RoundID uint `json:"round_id" db:"round_id"`
}

type StudentsRoundsCompanies struct {
    Name  string `json:"name" db:"name"`
    Department string `json:"department" db:"department"`
}
