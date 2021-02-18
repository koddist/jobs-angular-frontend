# Jobs 24/7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Todos

### Create a new development branch
- branch should be named dev-your-name
- features should be implemented in feature branches feat/name-of-feature
- merge the features into your dev branch when they are completed  

### Add a service for querying the jobs 24/7 webservice
Endpoints:
- get positions from http://localhost:3030/positions
- get companies from http://localhost:3030/companies
- get jobs from http://localhost:3030/jobs

Search query parameters for the jobs endpoint are:<br/>
- postionId: number
- companyId: number
- search: string
  <br/>
  <br/>
- use async functions if applicable


### Add an observable data store service using Behaviour Subjects
- provide an Observable for positions array
- provide an Observable for companies array
- provide an Observable for jobs array
- implement search for position, company and freetext and emit the webservice query result
  <br/>
  <br/>
- use async functions if applicable

### Add a lazy loaded search feature module for route '/search'
Implement a search filter component<br/>
A User should be able to search for: <br/>
- position (dropdown async )
- company (dropdown)
- text in description (text input, debounce keyboard input 400ms)
  
Implement a search results component
- display jobs search result in a list<br/>
  a row should contain postition, company and description of the job
- use rxjs for combining data for jobs, companies and postitions from data store

- see search.jpg

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
