package model 

type User struct {
   Name string `json:"first_name"`
   GctEmail string `json:"gct_email" gorm:"gct_email"`
   Roll string `json:"roll" gorm:"primaryKey"`
}
