# Labseq_Exercise
Implement a REST service, using a JAVA framework ( Quarkus) , returning a value from the labseq sequence.
A simple JavaScript web GUI (AngularJS) was use to invoke the service.

This exercise can be divided into two parts: the Backend part which was developed using Quarkus and the Frontend part which used Angular.
You need to run the Frontend and Backend separately. We'll explain how to do this below.

Important Note -> I had to submit the project without the "node_modules" folder as it was too big to put here, but I think it is generated 
when the project is built in the Frontend. If it doesn't appear and you get an error when you run the project, I'll send it to you by email.

Backend
---------------------
The Backend is responsible for calculating the values of the requested sequence, given by the index "n", implementing a recursive method 
to calculate these values and a Cache method to improve the efficiency of this calculation. It is also responsible for exposing RESTful endpoints.
These main responsibilities are reflected in the classes: Labseq, Labseq_REST and Labseq_Response.

URLS:
REST API documentation - http://localhost:8080/q/swagger-ui/

Backend: http://localhost:8080/labseq/{n}/

Frontend
--------------------
The Frontend plays a crucial role in user interaction with the Quarkus backend. It is mainly made up of the AppComponent class and the ApiService 
service, which together provide a graphical user interface and manage communication with the backend.

Note: Docker was used for the frontend, since version 18.04 of my Ubuntu system didn't support the necessary versions of Angular and Npm. Docker thus makes it possible to run applications in isolated containers with their own versions of dependencies, regardless of the versions installed on the host operating system.

URLS:
Frontend: http://localhost:4200/

How to Run 
--------------------
Run Backend:

In the development of this project JDK Java 17 and Maven version 3.8.1 were used to develop this project.
If you are in the root directory of the project, go to the correct directory.

```
cd Backend-Quarkus
```
Next, you need to compile the project:

```
./mvnw compile quarkus:dev
```

Run Frontend:

It's important to note that Docker is used in the Frontend part, so you need to check that you have it installed on your machine first. 
If not, install it before running the project. In the development of this project Docker version 20.10.21 was used.
After that, if you are in the root directory of the project, go to the correct directory.

```
cd Frontend-Angular
```
Next, you need to build using Docker:

```
docker build -t angular .
```
And then the Docker run command:

```
docker run -d -p 4200:4200 angular

```
