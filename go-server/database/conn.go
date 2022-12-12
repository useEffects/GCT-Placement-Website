package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect () {
   user := os.Getenv("PG_USER")
   password := os.Getenv("PG_PASSWORD")
   host := os.Getenv("PG_HOST")
   database := os.Getenv("PG_DATABASE")
   connStr := fmt.Sprintf("postgres://%s:%s@%s/%s?sslmode=disable", user, password, host, database)
   var err error
   DB, err = sql.Open("postgres", connStr)
   if err != nil {
      log.Fatal(err)
   }
   if err = DB.Ping(); err != nil {
      log.Fatal(err)
   }
   fmt.Println("Database connected successfully")
}

