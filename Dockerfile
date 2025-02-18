# Stage 1: Build the app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of your project files
COPY . .

# Build the Vite app (this will produce the /dist folder)
RUN npm run build

# Stage 2: Serve the built app
FROM node:18-alpine AS production
WORKDIR /app

# Copy built files from the build stage
COPY --from=build /app/dist ./dist

# Install the serve package globally to serve static files
RUN npm install -g serve

# Expose the port your app will run on
EXPOSE 3000

# Command to run the app using serve
CMD ["serve", "-s", "dist", "-l", "3000"]
