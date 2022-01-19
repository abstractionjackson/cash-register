FROM node:17-alpine3.14
WORKDIR /code
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm", "start" ]