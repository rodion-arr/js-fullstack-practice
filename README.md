# Full stack JS practice project
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
- [ ] Module organization: core, shared, feature
- [ ] Templates 
    - [x] Angular Material - [#2](https://github.com/rodion-arr/js-fullstack-practice/pull/2)
    - [ ] SASS for styling
    - [ ] Build custom pipe
    - [ ] Build custom directive
- [ ] Routing
    - [ ] Lazy loaded modules
    - [ ] Route guard
    - [ ] Route resolver
- [ ] Async operations
    - [ ] NgRx for store
        - [ ] CRUD with entities
    - [ ] HttpClient for all async calls
- [ ] Unit tests
    - [ ] Karma

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
