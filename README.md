# Products

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Steps to run the app

- Clone the repo - https://github.com/maisambakhshi10/products-list
- `cd products`
- `npm i`
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files
- run the json-server ` json-server --watch db.json`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Dependencies

1.  Angular: A powerful JavaScript framework for building web applications.
2.  Tailwind CSS: A utility-first CSS framework for rapid UI development. [Learn more](https://tailwindcss.com/docs/guides/angular).
3.  JSON Server: A simple and lightweight mock API server. [Learn more](https://www.npmjs.com/package/json-server).
4.  NgxPagination: A pagination component for Angular apps. [Learn more](https://www.npmjs.com/package/ngx-pagination).

## Further notes

I've built a very basic app with the functionalities asked of me, which are the following

- routes
- observables to retrieve data
- services
- modules for products
- pipes
- directives

Due to the time constraints I kept the functionalities very simple, If I had more time to implement, I would have implemented the followings

- search bar to search for products
- filter/sort products using RxJS operations
- implemented state-management with actions, reducers, effects and selectors.
- lazy loading for routes
- implemented SCAM module pattern if it was larger application
- shared components to re-use across the app
- smart components for retrieving data and dumb components. using @input() and @output() for data transfer
- micro-frontend architecture for independencies of features
