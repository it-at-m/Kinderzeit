# Kinderzeit
#### We are team Seakers, a student group of the Digital Product School program here at Munich. We are currently developing a digital product with the support of Landeshauptstadt München with the goalto help parents organize an amazing time for their kids during school holidays. 

# :computer: Tech Stack:
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 	![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)


# Features
* Parents can sort the events according to stadtteil, Alter, Konsten .
* Mehr info provides futher information about the event.
* The event details page consist of Route planner, Organizer details ,Important instructions , Parents must attend , Event discription etc.
* The Event hinzufügen feature enables organizer to add events to the website
* The Empfehlung option provides recommendation for events on the basis of Address ,cost,age, intrest of the child.  

![Screenshot from 2022-07-29 14-04-45](https://user-images.githubusercontent.com/73706697/181719274-524c9bd5-e09c-4eaa-8f72-ed7f0fbe0e59.png)

### [website link](https://kinderzeit.io)

# Dev Environment Setup
* Notice that the root of the repository is a NPM project. This NPM project is in-place due to `husky`, a Git hook manager. Git hooks allow you to run commands in response to certain actions. For example, trying to do a commit when linting or formatting fail on the frontend will result in a fail. Only 10x code in this repo! :^)
* Install `yarn` and `Docker` globally on your machine
* Run `yarn install` in the root of the repository
* Run `yarn install` inside the frontend directory
*  Run `docker-compose up --build` in the root of the repository to build the project 
* Always check the `README.md` inside each of the modules for further instructions specific to the project.
