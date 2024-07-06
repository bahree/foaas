# FROM node:10-alpine

# WORKDIR /usr/src/app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy application source
# COPY . .

# EXPOSE 5000

# # Switch to a non-root user
# USER node

# CMD [ "node", "lib/server.js" ]

# =========
# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install --production

# Copy local code to the container image.
COPY . .

# Run the web service on container startup.
CMD [ "npm", "start" ]

# Expose the port the app runs on
EXPOSE 5000
