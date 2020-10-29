FROM node:12.19-alpine3.10

ARG NODE_ENV=${NODE_ENV:-development}

WORKDIR /usr/src/dependency-analyzer

COPY . .

RUN npm install

CMD npm start
