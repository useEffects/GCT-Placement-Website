package types

type Company struct {
    ID uint `json:"id" db:"id"`
    Name string `json:"name" db:"name"`
    ImgSrc string `json:"img_src" db:"img_src"`
} 
