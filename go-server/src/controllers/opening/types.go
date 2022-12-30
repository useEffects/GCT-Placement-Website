package controller

type Opening struct {
   ID uint `json:"id" db:"id"` 
   CompanyID uint `json:"company_id" db:"company_id"`
   Description string `json:"description" db:"description"`
}

type CreateOpeningPayload struct {
   ID uint `json:"id"`
   CompanyID uint `json:"company_id"`
   OpeningDescription string `json:"opening_description"`
   Round1Description string `json:"round_1_description"`
   DepartmentIDs []uint `json:"department_ids"`
}

