package database

import (
	model "go-server/database/models"
	"log"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DbInstance struct {
   Db *gorm.DB
}

var Database DbInstance

func SqliteDBC() {
   db, err := gorm.Open(sqlite.Open("database/db/db.db"), &gorm.Config{}) 
   if err != nil {
      log.Fatal(err)
   } 
   log.Println("Connected to the database successfully !")
   db.Logger = logger.Default.LogMode(logger.Info)
   db.AutoMigrate(&model.User{})   
   Database = DbInstance{Db: db}
}
