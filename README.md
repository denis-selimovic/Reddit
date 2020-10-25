# Reddit Clone

## What is it?
Reddit Clone is a REST-based web application made with Spring Boot and React with Redux. It is a simple version od Reddit made for educational purposes. Reddit clone utilizes PostgreSQL database.

## Stack
* The web application is made using __ReactJS with Redux__. 
* REST API is developed using __Spring Boot__. 
* Reddit Clone uses __PostgreSQL__.
* Web application and server are deployed to __Heroku Platform__.
* Backend connects to the __PostgreSQL__ database deployed on Heroku.

## Check out the application
* Web application is available [here](https://webapp-rclone.herokuapp.com).
* The API can be accessed via [this link](https://api-reddit-clone.herokuapp.com)

## Start the application locally

### Server
* Make sure you have installed JDK installed on your machine (version >= 11)
* You will need Maven to start server
* Clone the github repository
* Navigate to the api folder and run __mvn install__ to install the application dependencies
* You can start application locally in which case you need PostgreSQL database on localhost name redditdb with user reddituser and password password
* If you want to connect to remote database you must have following environment variables set

```javascript
DATABASE_HOST
DATABASE_USERNAME
DATABASE_PASSWORD
```
* You can change between two by changing default profile in application.yml

* Run __mvn spring:boot run__ to start server
* Experiment with the API!

### Web Application
* Navigate to the webapp folder and run __npm install__ to install the application dependencies
* Create a .env file with the following environment variables set:

```javascript
REACT_APP_BASE_URL=
REACT_APP_LOCALHOST=
```
* Run __npm start__ to start the application
* You may choose to run the application locally but connect to our deployed API in which case you should run the application with 
__NODE_ENV=PRODUCTION npm start__
* Experiment with the app!
