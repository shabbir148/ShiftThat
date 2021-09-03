# FROM node:alpine
# WORKDIR '/app'

# COPY package*.json .
# RUN npm install 
# COPY . .
# EXPOSE 3000
# RUN npm start

# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]