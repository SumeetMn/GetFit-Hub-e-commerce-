# Backend for Folks Analytica

## Install dependencies

Run the command 
    
    npm install

### Dependenicies

    body-parser
    cors
    express
    mysql2
    sequelize

## How to run
    
Run the command
    
    npm start

or
    
    node server.js

## Database

Execute the SQL script in the folder 'sql'

## API

### Register

----

API to register `user credentials`.

* **URL**
    
    /users/register

* **Method**
    
    `POST`

* **Data Params**

    **Required:**

    `name=[string]`

    `email=[string]`

    `password=[string]`

* **Success Response**
  
  * **Code:** 200 <br />
    **Content:** `{ status: user.email + registered }`
 
* **Error Response:**

  * **Code:** 400  <br />
    **Content:** `{ error : error }`

  * **Code:** ---  <br />
    **Content:** `{ error: "User already exists" }`


### Login

----

API to verify `user credentials` for authentication.

* **URL**
    
    /users/login

* **Method**
    
    `POST`

* **Data Params**

    **Required:**

    `email=[string]`

    `password=[string]`

* **Success Response**
  
  * **Code:** 200 <br />
    **Content:** `{ payload: payload, success: true }`
 
* **Error Response:**

  * **Code:** ---  <br />
    **Content:** `{ message: "User not found", success: false }`

  * **Code:** ---  <br />
    **Content:** `{ message: "Incorrect passowrd", success: false }`

  * **Code:** ---  <br />
    **Content:** `{ message: err, success: false }`