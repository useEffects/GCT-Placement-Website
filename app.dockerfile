FROM node:18
WORKDIR /home/app
COPY package*.json ./
RUN npm install -f
COPY . .
EXPOSE 4200
CMD ./node_modules/.bin/nx serve client-website --verbose