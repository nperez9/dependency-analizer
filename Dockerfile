FROM node:10-alpine

ARG NODE_ENV=${NODE_ENV:-development}

WORKDIR /usr/src/dependency-analyzer

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080

CMD npm start
