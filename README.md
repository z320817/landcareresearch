# Finished project
## Where to find finished project?
- Deployed version is available [via this link](http://yshulman.com/)

**http://yshulman.com/**

# HOW TO RUN
## Prerequisites:

- make sure docker and docker compose are installed and latest versions
- make sure containers or images named `frontend` and `backend` are not exist on your local machine. If they exists, have to be removed first.
- run `git clone https://github.com/z320817/landcareresearch.git`
- run `docker compose up -d`

**Apllication should be up and running.** 

# DESCRIPTION
## Application structure, properties and configuration:
- Backend: C# (.Net 6)
- Frontend: Angular 15 (Latest CLI, latest LTS of NodeJS)
- [Swagger API documentstion](http://yshulman.com/v1/swagger/index.html) is available
![Swagger API documentstion](https://github.com/z320817/landcareresearch/blob/main/Frontend/src/assets/images/swagger.png "Swagger API documentstion")
- Backend `NewsService` test added. Can be checked with `cd Backend` and `dotnet test`
![Backend Test](https://github.com/z320817/landcareresearch/blob/main/Frontend/src/assets/images/backend_xunit_test.png "Backend Test")
- Frontend `app.component` tests added. Can be checked with `cd Frontend` and `npm run test`
![Frontend Test](https://github.com/z320817/landcareresearch/blob/main/Frontend/src/assets/images/frontend_jasmine_unit_test.png "Frontend Test")


# Features
## Special features used worth to mention:
- GIT history available per repository `git  clone https://github.com/z320817/Frontend.git` and `git log` 
  or `git clone https://github.com/z320817/Backend.git` and `git log`
- `.env` file is used to manage and configure GNews API key, Frontend and Backend url's
- Static frontend build is served with [Nginx](https://nginx.org/en/ "Nginx") (fast and efficient static files server)
- CORS enabled and controlled with .env file
- [Angular Material UI](https://material.angular.io/ "Angular Material UI") is used as frontend UI library, UI is responsive
- Bookmarking functionality added
- AWS deploy is available

## Fetch news:
![Fetch news](https://github.com/z320817/landcareresearch/blob/main/Frontend/src/assets/images/fetch.gif "Fetch news")

## Search news:
![Fetch news](https://github.com/z320817/landcareresearch/blob/main/Frontend/src/assets/images/search.gif "Search news")

## Bookmark news:
![Bookmark news](https://github.com/z320817/landcareresearch/blob/main/Frontend/src/assets/images/bookmarks.gif "Bookmark news")