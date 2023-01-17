cd ./next-app
docker build -t next-app .
cd ..
cd ./cms
docker build -t cms .
cd ..
docker-compose up 