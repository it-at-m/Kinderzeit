# Running locally 
Inside the backend folder run: 

./gradlew bootRun

# Building the docker image
./gradlew bootBuildImage --imageName=seakers-backend

# Running the docker image
docker run -p 8080:8080 seakers-backend