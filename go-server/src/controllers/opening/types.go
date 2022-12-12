package controller

type Opening struct {
   ID uint `json:"id" db:"id"` 
   CompanyID uint `json:"company_id" db:"company_id"`
   Description string `json:"description" db:"description"`
}
