<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# Consult Pico y Placa

Consult Pico y Placa is an **oversized &nbsp;&nbsp;🔫 &nbsp;&nbsp; to kill a &nbsp;&nbsp;🪰&nbsp;&nbsp;**

It tells you if you are allowed to circulate given the license plate number, date and time<br />

[Description](#description) •
[Installation](#installation) •
[Executing](#executing) •
[E2E Testing](#e2e-testing) •
[Unit Testing](#unit-testing)

</div>

<div align="center">

https://user-images.githubusercontent.com/101288216/175425725-381b6364-7260-4ef2-982c-c1c032e27ef4.mov

</div>



## Description

The forontend is constructed using React.js and SASS, Redux for state management, Mocha and Chai for unit testing, Cypress for E2E testing.
The backend is a very simple Express rest API server. ( A total overkill... there are defenitely more efficient ways of doing it but of course isn't the point.)
<br/>
The data is structured in a hash table, so lookup time is O(1)... ( I obviously say this to show off )

## Installation

### _Step 1: Install Frontend dependencies_

````sh
    $ npm install 
 ````  
### _Step 2: Install Backend dependencies_
````sh
    $ cd server 
    $ npm install 
 ````  

## Executing 
### _Step 1: Run Server in a new tab..._

````sh
    $ npm run start-server
 ````  
### _Step 2: Run FrontEnd in a new tab..._

````sh
    $ npm start
 ```` 

 ## E2E testing 

### _Open Cypress in a new tab..._

````sh
    $ npm run cypress:open
 ```` 
Execute e2e tests **querying.cy.js**

 ## Unit Testing

````sh
    $ npm run unit-test
 ```` 
