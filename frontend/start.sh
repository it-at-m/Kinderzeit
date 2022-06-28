#!/bin/bash
# Running line #3 in this script inside the Dockerfile will
# not actually open the next.js process. So nginx will work
# fine but redirect to port 3000 that has nothing.
# Probably related to layer-style of Docker images.
# Running them inside the container will fix this.
pm2 start "yarn start";
nginx;