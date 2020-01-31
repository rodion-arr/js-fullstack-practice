# Full stack JS practice project

[![Frontend](https://github.com/rodion-arr/js-fullstack-practice/workflows/Frontend/badge.svg)](https://github.com/rodion-arr/js-fullstack-practice/actions?query=workflow%3AFrontend)

A project for practice Fullstack JS technologies

## How to run
### Development run
Run project locally (tested on Docker Desktop v19)
```bash
cd ".docker"
docker-compose up -d
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
- [ ] Routing
    - [ ] Lazy loaded modules
    - [ ] Route guard
    - [ ] Route resolver
- [ ] Async operations
    - [ ] NgRx for store
        - [ ] CRUD with entities
    - [ ] HttpClient for all async call
    - [ ] Build HttpInterceptor   
- [ ] Unit tests
    - [x] Karma, Jasmine - [example with Material BreakpointObserver mock - top-menu.component.spec.ts](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/core/top-menu/top-menu.component.spec.ts)

## Backend 
- [ ] NodeJs API
- [ ] Express
- [ ] TypeScript
- [ ] MongoDB
- [ ] Auth

## DevOps
- [ ] Use docker containers 
    - [x] Frontend image for development - [#1](https://github.com/rodion-arr/js-fullstack-practice/pull/1)
    - [ ] Backend image for development
- [ ] CI
    - [x] Setup GitHub actions - [#10](https://github.com/rodion-arr/js-fullstack-practice/pull/10)
    - [x] Run tests - [Running in docker build](/.docker/frontend/Dockerfile.prod#L29)
    - [ ] Publish coverage report
- [ ] CD
    - [x] Frontend image for deployment - [Production Docker image](/.docker/frontend/Dockerfile.prod)
    - [ ] Backend images for deployment
    - [ ] Push to dockerhub 
