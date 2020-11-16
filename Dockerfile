FROM node:10.23.0
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "node", "server.js" ]