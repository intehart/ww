FROM node:18-alpine

WORKDIR /app

copy . .

RUN npm install