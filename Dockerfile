# Dockerfile (for backend)
FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD ["node", "index.js"]
