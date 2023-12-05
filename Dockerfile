FROM node:21-alpine3.17

WORKDIR /todoapi/src/app

COPY packagae*.json ./

COPY . .

EXPOSE 8090

CMD ["node", "index.js"]