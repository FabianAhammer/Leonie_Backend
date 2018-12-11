FROM node:8

# Create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /home/node/app/

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /home/node/app/

EXPOSE 3000
CMD [ "npm", "start" ]
