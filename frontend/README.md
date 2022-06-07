If you want to see the interactive areas while positioning them in the click dummy, open up App.js and change the debug variable to `true`.

# building the docker image
```docker build -f Dockerfile.dev -t seakers-frontend:dev```

# running the docker image
```docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true seakers-frontend:dev```

-it starts the container in interactive mode, needed because react-scripts exists after start-up which will cause the container to exit

--rm removes the container and volumes after the container exits

-v ${PWD}:/app mounts the code into the container at /app

-v /app/node_modules -> we want to use the container version of the node_modules

-p 3000:3000 expose port 3000 to other Docker containers on the same network and 3001 to the host

-e CHOKIDAR_USEPOLLING= true enables polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, fsevents), needed for hot-reloading