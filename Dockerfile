# Use the official Node.js image as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "start"]