FROM node:18.14

WORKDIR /app

COPY package*.json ./


RUN npm install -g @angular/cli 

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
