# Building Prod Docker Image
```docker build -f Dockerfile.prod -t seakers-frontend:prod .```

# Building Dev Docker Image
```docker build -f Dockerfile.dev -t seakers-frontend:dev .```

# Running Dev Docker Container

## UNIX
```docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true seakers-frontend:dev```

## WINDOWS
```docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true seakers-frontend:dev```

## Command Explanation

* `it`  container in interactive mode, needed because react-scripts exists after start-up which will cause the container to exit

* `--rm` removes the container and volumes after the container exits

* `-v ${PWD}:/app` mounts the code into the container at /app

* `-v /app/node_modules` -> we want to use the container version of the node_modules

* `-p 3000:3000` Expose port 3000 to other Docker containers on the same network and 3001 to the host

* `-e CHOKIDAR_USEPOLLING=true` Enable polling mechanism via chokidar (which wraps fs.watch, fs.watchFile, fsevents), needed for hot-reloading
