FROM node:16-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli@14.2.13 && npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Use a lightweight server for the final stage
FROM node:16-alpine

# Set working directory in the final container
WORKDIR /app

# Install http-server to serve the Angular app
RUN npm install -g http-server

# Copy only the built application from the builder stage
COPY --from=builder /app/dist/psa-ui-webapp ./dist/psa-ui-webapp

# Fix: Remove "-a true", add "--proxy" for Angular routing support
CMD ["http-server", "./dist/psa-ui-webapp", "-p", "8081", "-s"]




# Expose the port
EXPOSE 8081
