# base image
FROM node:lts

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./backend/package.json /app/package.json
COPY ./backend/package-lock.json /app/package-lock.json
RUN npm install

# add app
COPY ./backend/ /app

# start app
CMD npm run watch-debug
