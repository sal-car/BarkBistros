# Dockerfile
FROM node:14.21.3

ENV METEOR_ALLOW_SUPERUSER=true
ENV ROOT_URL="http://localhost:3000"
ENV DDP_DEFAULT_CONNECTION_URL="http://127.0.0.1:3000"
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
RUN curl "https://install.meteor.com/" | sh

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN chmod -R 700 /usr/src/app/.meteor/local
RUN meteor npm install

EXPOSE 3000
CMD ["npm", "start"]
