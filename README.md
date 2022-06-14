# Dev Environment Setup
* Notice that the root of the repository is a NPM project. This NPM project is in-place due to `husky`, a Git hook manager. Git hooks allow you to run commands in response to certain actions. For example, trying to do a commit when linting or formatting fail on the frontend will result in a fail. Only 10x code in this repo! :^)
* Install `yarn` and `Docker` globally on your machine
* Run `yarn install` in the root of the repository
* Run `yarn install` inside the frontend directory
* Always check the `README.md` inside each of the modules for further instructions specific to the project
