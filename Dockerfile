# 1. Use an official Node runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy only package.json and package-lock.json first
# This is a caching optimization!
COPY package*.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy the rest of your application code
COPY . .

# 6. Build the Next.js application
RUN npm run build

# 7. Expose the port Next.js will run on
EXPOSE 3000

# 8. Define the command to run your app
CMD ["npm", "start"]
