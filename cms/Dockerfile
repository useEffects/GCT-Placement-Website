FROM node:16-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY ./ ./
RUN npm install -f
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]
