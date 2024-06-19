# Stage 1: Build the application
FROM maven:3.8.4-openjdk-11 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy Maven files from the local directory to the working directory of the container
COPY pom.xml .
COPY src ./src

# Building an application with Maven
RUN mvn clean package -DskipTests

# Stage 2: Create the Docker image with the compiled application
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the assembled JAR file from the previous step into the container
COPY --from=build /app/target/tech-hub-connect-1.0.0.jar ./app.jar

# Specify the command to start the application when the container starts up
ENTRYPOINT ["java", "-jar", "app.jar"]

# Optional: specify the port on which the application is running (if known)
EXPOSE 8080
