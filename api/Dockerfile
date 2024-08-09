FROM node:16

WORKDIR /app

COPY . .

RUN rm -rf node_modules

RUN npm install

EXPOSE 5001

CMD ["npm", "run", "dev"]
