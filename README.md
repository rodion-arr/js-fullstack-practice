# Full stack JS practice project

[![Frontend](https://github.com/rodion-arr/js-fullstack-practice/workflows/Frontend/badge.svg)](https://github.com/rodion-arr/js-fullstack-practice/actions?query=workflow%3AFrontend)
[![Backend](https://github.com/rodion-arr/js-fullstack-practice/workflows/Backend/badge.svg)](https://github.com/rodion-arr/js-fullstack-practice/actions?query=workflow%3ABackend)
[![codecov](https://codecov.io/gh/rodion-arr/js-fullstack-practice/branch/master/graph/badge.svg)](https://codecov.io/gh/rodion-arr/js-fullstack-practice)

A project for practice Fullstack JS technologies

**Summary of used technologies:**
- Front-end (Angular 10/TypeScript/SASS/CSS Flex/CSS Grid/Angular Material/Jasmine)
- Back-end (Node.js/TypeScript/Express/Mongoose/Jest/Cluster)
- Infra (Docker/GitHub Actions/CI/Codecov/DependaBot)

<img src="https://user-images.githubusercontent.com/5843270/81486438-73c31500-925d-11ea-8e05-787e016f5df7.png" width="30%"></img>
<img src="https://user-images.githubusercontent.com/5843270/81486426-66a62600-925d-11ea-8284-26cc7de3d045.png" width="30%"></img>
<img src="https://user-images.githubusercontent.com/5843270/81486436-71f95180-925d-11ea-90f4-8b3970f716de.png" width="10%"></img> 

## How to run
### Development run
Run project locally (tested on Docker Desktop v19)
```bash
cd ".docker"
docker-compose up -d #run project services
docker-compose exec backend migrate-mongo up #run migrations
open http://localhost:4200
```

Run frontend tests
```bash
docker-compose exec frontend ng test --watch=false
docker-compose exec frontend ng e2e --port 4202
```

### Production run
```bash
cd ".docker"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
open http://localhost
```

Unit tests will be run automatically during docker image build

## Frontend 
- [ ] Smart containers/Dummy components pattern 
- [x] Module organization: core, shared, feature - [#3](https://github.com/rodion-arr/js-fullstack-practice/pull/3)
- [x] Templates 
    - [x] Angular Material - [#2](https://github.com/rodion-arr/js-fullstack-practice/pull/2)
    - [x] Angular Flex - [example - plates.component.html](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/home/plates/plates.component.html)
    - [x] SASS for styling - [example - footer.component.sass](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/core/footer/footer.component.sass)
    - [x] Build custom pipe - [#13](https://github.com/rodion-arr/js-fullstack-practice/pull/13)
    - [x] Build custom directive - [#14](https://github.com/rodion-arr/js-fullstack-practice/pull/14)
    - [x] Reactive forms - [#30](https://github.com/rodion-arr/js-fullstack-practice/pull/30)
- [ ] Routing
    - [x] Lazy loaded modules - [#16](https://github.com/rodion-arr/js-fullstack-practice/pull/16)
    - [x] Route guard - [#18](https://github.com/rodion-arr/js-fullstack-practice/pull/18)
    - [ ] Route resolver
- [ ] Async operations
    - [ ] NgRx for store
        - [x] Dedicated Store module - [#31](https://github.com/rodion-arr/js-fullstack-practice/pull/31)
        - [ ] CRUD with entities
    - [ ] HttpClient for all async call
    - [ ] Build HttpInterceptor   
- [ ] Unit tests
    - [x] Karma, Jasmine - [example with Material BreakpointObserver mock - top-menu.component.spec.ts](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/core/top-menu/top-menu.component.spec.ts)
- [ ] Keeping up-to-date
    - [x] Upgrade to Angular 9 - [#29](https://github.com/rodion-arr/js-fullstack-practice/pull/29)
    - [x] Upgrade to Angular 10 - [#200](https://github.com/rodion-arr/js-fullstack-practice/pull/200)
- [x] CSS Grid - [#47](https://github.com/rodion-arr/js-fullstack-practice/pull/47)

## Backend 
- [ ] NodeJs API
- [x] Express - [app.ts](https://github.com/rodion-arr/js-fullstack-practice/blob/master/backend/src/app.ts)
    - [x] Router - [#216](https://github.com/rodion-arr/js-fullstack-practice/pull/216)
- [x] TypeScript - [#39](https://github.com/rodion-arr/js-fullstack-practice/pull/39)
- [ ] MongoDB - [#35](https://github.com/rodion-arr/js-fullstack-practice/pull/35)
    - [x] Mongoose - [#41](https://github.com/rodion-arr/js-fullstack-practice/pull/41)
    - [x] DB Migrations - [#42](https://github.com/rodion-arr/js-fullstack-practice/pull/42)
- [x] Graceful shutdown - [#199](https://github.com/rodion-arr/js-fullstack-practice/pull/199)
- [ ] Auth

## DevOps
- [ ] Use docker containers 
    - [x] Frontend image for development - [#1](https://github.com/rodion-arr/js-fullstack-practice/pull/1)
    - [x] Backend image for development - [NodeJS in container](/.docker/backend/Dockerfile.prod)
- [ ] CI
    - [x] Setup GitHub actions - [#10](https://github.com/rodion-arr/js-fullstack-practice/pull/10)
    - [x] Run tests - [Running in docker build](/.docker/frontend/Dockerfile.prod#L29)
    - [x] Publish coverage report - [Integrated with Codecov](https://codecov.io/gh/rodion-arr/js-fullstack-practice)
- [ ] CD
    - [x] Frontend image for deployment - [Production Docker image](/.docker/frontend/Dockerfile.prod)
    - [x] Backend images for deployment - [Production NodeJS Docker image](/.docker/backend/Dockerfile.prod)
    - [ ] Push to dockerhub 
