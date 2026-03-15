# A simple API

This is a simple **REST API built with Node.js and Express** that performs CRUD operations on tea data.

This project demonstrates how to create a basic backend server and handle HTTP requests using Express. It also includes request logging using Morgan and Winston.

---

## Features

* Create a new tea
* Get all teas
* Get a tea by ID
* Update tea information
* Delete a tea
* Request logging using Morgan
* Custom logging using Winston
* Environment variable configuration using dotenv

---

## Technologies Used

* Node.js
* Express.js
* REST API
* Morgan
* Winston
* Dotenv

---

## API Endpoints

### Create Tea

POST `/teas`

Example body:
{
"name": "Green Tea",
"price": 120
}



---

### Get All Teas

GET `/teas`

Returns a list of all teas.

---

### Get Tea by ID

GET `/teas/:id`

Example:
/teas/1


---

### Update Tea

PUT `/teas/:id`

Example body:
{
"name": "Premium Green Tea",
"price": 150
}


---

### Delete Tea

DELETE `/teas/:id`

---

## Testing the API

You can test the API using:

* Postman
* Thunder Client (VS Code)
* cURL
* Insomnia


---

## Important Notes

* Data is stored **in memory**, so it will reset when the server restarts.
* Logs are generated using **Morgan** and stored using **Winston**.
* Log files are saved in `app.log`.
* This project is for **learning purposes**.
