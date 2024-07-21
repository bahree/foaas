# # Old version:
# # =========
# # Use the official Node.js image.
# FROM node:14

# # Create and change to the app directory.
# WORKDIR /usr/src/app

# # Copy application dependency manifests to the container image.
# COPY package*.json ./

# # Install dependencies.
# RUN npm install

# # Expose the port the app runs on
# EXPOSE 5000

# # Copy local code to the container image.
# COPY . .

# # Switch to a non-root user
# USER node

# # Run the web service on container startup.
# CMD [ "npm", "start" ]



# Stage 1: Build stage
FROM node:16-alpine AS build

# Install dependencies for building native modules (if needed)
RUN apk add --no-cache python3 make g++

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Stage 2: Production stage
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage.
COPY --from=build /usr/src/app ./

# Expose the port the app runs on
EXPOSE 5000

# Switch to a non-root user
USER node

# Run the web service on container startup.
CMD [ "npm", "start" ]
