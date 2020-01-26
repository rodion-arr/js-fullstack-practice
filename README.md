# Full stack JS practice project

![Frontend](https://github.com/rodion-arr/js-fullstack-practice/workflows/Frontend/badge.svg)

A project for practice Fullstack JS technologies

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
## Frontend 
- [ ] Smart containers/Dummy components pattern 
- [x] Module organization: core, shared, feature - [#3](https://github.com/rodion-arr/js-fullstack-practice/pull/3)
- [ ] Templates 
    - [x] Angular Material - [#2](https://github.com/rodion-arr/js-fullstack-practice/pull/2)
    - [x] Angular Flex - [example - plates.component.html](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/home/plates/plates.component.html)
    - [x] SASS for styling - [example - footer.component.sass](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/core/footer/footer.component.sass)
    - [ ] Build custom pipe
    - [ ] Build custom directive
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
    - [x] Karma, Jasmine - [example with Material BreakpointObserver mock - footer.component.sass](https://github.com/rodion-arr/js-fullstack-practice/blob/master/frontend/src/app/core/top-menu/top-menu.component.spec.ts)

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
    - [ ] Setup GitHub actions
    - [ ] Run tests
    - [ ] Publish coverage report
- [ ] CD
    - [ ] Build image
    - [ ] Frontend image for deployment
    - [ ] Backend images for deployment
    - [ ] Push to dockerhub 
