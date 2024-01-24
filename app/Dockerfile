# Dockerfile
FROM node:14.21.3

WORKDIR .

ENV METEOR_ALLOW_SUPERUSER=true
ENV ROOT_URL="http://localhost:3000"
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
RUN curl "https://install.meteor.com/" | sh

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN chmod -R 700 /usr/src/app/.meteor/local
RUN meteor npm install

EXPOSE 3000
CMD ["npm", "start"]
