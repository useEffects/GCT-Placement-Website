FROM node:18
WORKDIR /home/api
COPY package*.json .
RUN npm i @napi-rs/snappy-linux-x64-gnu
COPY . .
EXPOSE 8055
CMD npm run start