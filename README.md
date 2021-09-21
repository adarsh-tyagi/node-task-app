# node-task-app
This is the backend of Task recording app in NodeJS, Express and MongoDB. In this JWT authentication is included. User can create account, post profile picture, record their tasks, update and delete the tasks and profile also.

To run the app in system:
### Firstly, run the command: npm install 
   This will install the all reuquired packages.
### Then create a .env file ans store the following values as key value pairs
   - PORT=3000
   - MONGO_URL=<mongodb atlas url>
   - SECRET_KEY=<secret key to be used in JWT>
   - SENDGRID_API_KEY=<sendgrid api key to be used while sending emails to the user>
### Then run the command to start the server and app:
    npm start
