# Set the base image to node:14.9-stretch
FROM node:14.9-stretch

# Specify where our app will live in the container
WORKDIR /var/www/

# add `/var/www/node_modules/.bin` to $PATH
ENV PATH /var/www/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.3

# add app
COPY . ./

# start app
CMD ["npm", "start"] 