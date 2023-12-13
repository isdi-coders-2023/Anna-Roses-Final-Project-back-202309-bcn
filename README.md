# Neighbours API

This is the documentation for the Neighbours API, which provides endpoints to manage information about neighbors.

## Endpoints

### 1. List Neighbours

Endpoint: /neighbours/list
Method: GET
Description: Retrieves a list of neighbours.
Response: Empty

### 2. Ping

Endpoint: /neighbours/ping
Method: GET
Description: Checks the availability of the API.
Response: Empty

### 3. Endpoint Not Found

Endpoint: /neighbours/endpoint-not-found
Method: GET
Description: Returns a response for an endpoint that is not found.
**Response: Empty**

### 4. Delete Neighbour

Endpoint: /neighbours/delete
Method: DELETE
Description: Deletes a neighbour by ID.
Request:
URL: http://localhost:1714/neighbours/6563639cc4ddfcae99eeb07a
**Response: Empty**

### 5. Add Neighbour

Endpoint: /neighbours/create
Method: POST
Description: Adds a new neighbour.
Request:
URL: http://localhost:1714/neighbours/create

**Body: json**

```js
{
  "floor": "0",
  "door": "1",
  "coefficient": 9,
  "moneyInFavour": 246,
  "ownerFirst": "Marta Ibarra Chef",
  "ownerSecond": "Mela Maluenda",
  "activityKind": "Restaurante",
  "isFirstResidence": false,
  "isRented": false,
  "numberOfResidents": 1,
  "yearOfPurchase": 2018,
  "coments": "Tienen 2 estrellas Michelin",
  "image": "https://i.ibb.co/N7k0Q4y/minion-chef.webp"
}
```

**Response: Empty**

### 6. Get Neighbour by ID

Endpoint: /neighbours/get-by-id
Method: GET
Description: Retrieves a neighbour by ID.
Response: Empty

### 7. Update Neighbour

Endpoint: /neighbours/patch
Method: PATCH
Description: Updates a neighbour by ID.
Request:
URL: http://localhost:1714/neighbours/6573446fc2f35a7cf22155ee

**Body: json**

```js
{
  "\_id": "6563639cc4ddfcae99eeb07a",
  "name": "Marta Ibarra Chef",
  "floor": "0",
  "door": "1",
  "coefficient": 9,
  "moneyInFavour": 246,
  "firstOwner": "Marta Ibarra Chef",
  "secondOwner": "Mela Maluenda",
  "powers": "Propietario",
  "activityKind": "Restaurante",
  "firstResidence": "No",
  "rented": "No",
  "numberOfResidents": 2,
  "yearOfPurchase": "2018",
  "coments": "adeu",
  "image": "https://i.ibb.co/N7k0Q4y/minion-chef.webp"
}
```

**Response: Empty**

Additional Information
Postman Collection:
ID: 5dbca563-0f39-4d4a-ac3e-53bd679a2a25

**Postman Collection Schema**

Feel free to use these endpoints to interact with the Neighbours API. If you have any questions or issues, please refer to the Postman Collection for additional guidance.

# MERN Stack and Neighbours API Toolkit

## MERN Stack Overview

The MERN (MongoDB, Express.js, React.js, Node.js) stack is a popular full-stack development framework used for building dynamic web applications. Each component of the stack plays a specific role in the development process:

- **MongoDB:** A NoSQL database that stores data in a flexible, JSON-like format. It is highly scalable and suitable for handling large amounts of data.

- **Express.js:** A back-end web application framework for Node.js that simplifies the process of building robust and scalable APIs. It provides a set of features for web and mobile applications.

- **React.js:** A JavaScript library for building user interfaces. It enables the creation of interactive and dynamic front-end components, making it efficient for building single-page applications.

- **Node.js:** A JavaScript runtime that allows the execution of JavaScript code server-side. It is used to build scalable network applications and is the foundation for Express.js.

## Toolkit

### Project Information

- **Name:** `neighbours-back`
- **Version:** `1.0.0`
- **Description:** (Description not provided)

### Main Tools and Dependencies

- **TypeScript:** A superset of JavaScript that adds static typing to the language, enhancing code quality and developer productivity.

- **Express:** A fast, unopinionated, minimalist web framework for Node.js, used to build the API.

- **MongoDB and Mongoose:** MongoDB as the database, and Mongoose as an ODM (Object Data Modeling) library for MongoDB and Node.js. Mongoose simplifies interactions with the MongoDB database.

- **Jest:** A JavaScript testing framework for Node.js applications. Used for unit and integration testing.

- **Supertest:** A library for testing HTTP assertions, commonly used with Jest for API testing.

- **Cors:** Middleware for enabling Cross-Origin Resource Sharing in Express.js.

- **Morgan:** HTTP request logger middleware for Node.js.

- **Dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

- **Debug and Chalk:** Debug is a tiny debugging utility, and Chalk is a library for styling console.log messages.

- **Linting and Formatting:**

  - ESLint with Prettier for code linting and formatting.
  - Husky and lint-staged for pre-commit linting.

- **Testing Utilities:**

  - `ts-jest` for TypeScript support in Jest.
  - `jest-ts-webcompat-resolver` for resolving TypeScript paths in Jest.

- **Validation:**
  - Joi for data validation.
