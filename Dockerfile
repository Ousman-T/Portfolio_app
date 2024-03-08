FROM node:18.14.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]