FROM node:carbon
WORKDIR /app

RUN npm -g install serve
COPY package*.json ./
COPY webpack.config.js ./
COPY .babelrc ./

RUN npm install

COPY ./src /app/src
RUN npm run build

EXPOSE 8080
CMD ["serve", "-s", ".dist", "-p", "8080"]
