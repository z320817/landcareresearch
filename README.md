# HOW TO RUN
## Prerequisites:
- make sure docker and docker compose are installed and latest versions
- make sure containers or images named `frontend` and `backend` are not exist on your local machine. If they exists, have to be removed first.
- run `docker compose up -d`

**Apllication should be up and running.** 

# DESCRIPTION
## Application structure, properties and configuration:
- Backend: C# (.Net 6)
- Frontend: Angular 15 (Latest CLI, latest LTS of NodeJS)
- [Swagger API documentstion](http://localhost/v1/swagger/index.html) is available(if project is up and running)
![Swagger API documentstion](Frontend/assets/images/swagger.png "Swagger API documentstion")
- Backend `NewsService` test added. Can be checked with `cd Backend` and `dotnet test`
![Backend Test](Frontend/assets/images/backend_xunit_test.png "Backend Test")
- Frontend `app.component` tests added. Can be checked with `cd Frontend` and `npm run test`
![Frontend Test](Frontend/assets/images/frontend_jasmine_unit_test.png "Frontend Test")


# Features
## Special features used worth to mention:
- GIT history available per folder `cd Backend` and `git log` or `cd Frontend` and `git log`;
- `.env` file is used to manage and configure GNews API key, Frontend and Backend url's
- Static frontend build is served with [Nginx](https://nginx.org/en/ "Nginx") (fast and efficient static files server)
- CORS enabled and controlled with .env file
- [Angular Material UI](https://material.angular.io/ "Angular Material UI") is used as frontend UI library, UI is responsive
- Bookmarking functionality added

## Fetch news:
![Fetch news](Frontend/assets/images/fetch.gif "Fetch news")

## Search news:
![Fetch news](Frontend/assets/images/search.gif "Search news")

## Bookmark news:
![Bookmark news](Frontend/assets/images/bookmarks.gif "Bookmark news")