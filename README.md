# MERN Infrastructure Skeleton
This project is a basic MERN authentication and infrastructure skeleton that uses JSON Web Tokens (JWTs) to authenticate users. When a user logs in, the server generates a JWT and sends it to the client. The client then stores the JWT in local storage, sending it along subsequent requests. The server then verifies the JWT to ensure that it is valid and has not been tampered with. If the JWT is valid, the server grants the user access to the requested resource.

In other words, this project provides a secure and flexible way to authenticate users in a web application using token-based authentication with JWTs and MongoDB.

## How to Use
Install dependencies by running `npm install` in the console.

Create a `.env` file and insert your `DATABASE_URL` and `SECRET`.

Run the backend by running `npm run server`.

Run a Vite dev build for the frontend by running `npm run client`.

## Technologies Used
- React
- Vite
- Express
- MongoDB
- Node.js

## Credits
This project was created by Marc Pelletier. If you have any questions or suggestions, please feel free to contact me at jmb.pelletier@gmail.com