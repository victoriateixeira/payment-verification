# E-Commerce Payment Validation Project

This README file provides an overview of the E-Commerce Payment Validation Project, which aims to implement a credit card validation system for an e-commerce website. This project is divided into two parts: the Frontend and Backend. The Frontend is built using React, while the Backend is developed using Node.js and Express.js.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Description

In this project, I have created a payment validation system for an e-commerce website. The primary goal is to reduce strain on an external payment system by performing simple sanity checks on credit card information before processing payments.

The system checks the following credit card details:

- The expiry date of the credit card (year and month) must be AFTER the present time.
- The CVV (security code) of the credit card must be exactly 3 digits long, except for American Express cards, which require a 4-digit CVV.
- The PAN (card number) must be between 16 and 19 digits long.
- The PAN (card number) is validated using Luhn's algorithm.

The project consists of two main components: a Frontend application and a Backend API.

## Features

- User-friendly interface for entering credit card information.
- Real-time validation of credit card details using Backend API.
- Clear success or failure indication on the Frontend.
- Support for American Express card validation.

## Prerequisites

Before running the project, ensure that you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): Included with Node.js installation.

## Installation

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/victoriateixeira/payment-verification.git
   ```

2. Navigate to the project directory.

   ```bash
   cd payment-verification
   ```

3. Install dependencies for root directory, Frontend and Backend:

   ```bash
   npm install
  
   # Install Frontend dependencies
   cd frontend
   npm install

   # Install Backend dependencies
   cd ../backend
   npm install
   ```

## Usage

The project uses `concurrently` to start both the Frontend and Backend with a single command.

To start both the Frontend and Backend concurrently,  on project root directory run:

```bash
npm start
```

This command will launch both the Frontend and Backend applications, and you can access them as follows:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000) - if you wish to change the port in which the backend runs, you can do so at the server.js file in the backend folder.

Make sure you have already installed the project dependencies as described in the installation steps before running `npm start`.

### API Endpoints

- `POST /api/verification` - Endpoint for credit card validation. Send credit card information as a JSON object in the request body.

   Example Request:

   ```json
   {
     "pan": "4111111111111111",
     "year": 2025,
     "month": 12,
     "cvv": "123"
   }
   ```

   Example Response (Success):

   ```json
   {
    "valid": true,
    "message": "Card information is valid."
   }
   ```

   Example Response (Failure):

   ```json
   {
     "valid": false,
     "message": "'PAN not valid'"
   }
   ```
