# React-Node-Typescript-MongoDB-setup

## Requirements
Node.js (version 20 or above recommended)
MongoDB Database (I have installed MongoDB compass in local machine to connect the db)

## Steps to setup
### Frontend
In your root directory add
npx create-react-app frontend --template typescript

This will install a react typescript library and setup a frontend with package.json and node_modules

Navigate to frontend 
cd /frontend

Run the command
npm start

This will start your client web application at localhost:3000

### Backend
In your root directory add 
mkdir backend

cd /backend 

npm init -y

This will initialize a Node.jS project and creates package.json and node_modules

To install Express framework and other libraries add

npm install cors dotenv express mongoose mongodb cookie-parser concurrently
npm install -D typescript @types/express @types/cors @types/cookie-parser @types/node nodemon ts-node

These commands install the necessary dependencies for our server, concurrently is a package that allows you to run multiple npm scripts concurrently, cors is used for enabling CORS, dotenv for loading environment variables, express for building the server, and mongoose for connecting to MongoDB. The development dependencies include TypeScript and the type definitions for our packages, as well as nodemon and ts-node for running our server during development.

npx tsc --init

This command will initialize typescript with tsconfig.json file and make necesessary changes in the file

Create .gitignore file and add node_modules, .env

In your backend folder create src/app.mts and add necessary import statements & code lines

Login to your MongoDB atlas and click on connect to create mongodb connection string, watch this video to understand https://www.youtube.com/watch?v=30p9QfybWZg&t=275s

Next in your package.json file add the scripts
 "scripts": {
    "build": "npx tsc",
    "start": "node dist/app.mjs",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon dist/app.mjs\""
  },

Next run the command
npm run dev

At first it will create dist file for your server and then stop the server and run the command again

Finally the output terminal should log
App is listening at port 8000
Connected to MongoDB Database 