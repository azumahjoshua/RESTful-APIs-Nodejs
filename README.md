# User Management API

## Overview

This API provides basic user management functionality, including user creation, retrieval, update, and deletion. It also supports user login.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git

2. **Navigate to the project directory:**

    ```bash
    cd your-repo

3. **Install dependencies**

    ```bash
    npm install

4. **Create a .env file in the root directory and set the required environment variables:**

    - APP_PORT=3000
    - KEY=your-secret-key
    - DB_PORT=3306
    - DB_HOST=localhost
    - DB_USER=root
    - DB_PASS=''
    - MYSQL_DB=your-database-name

5. Start the application
    ```bash
    npm start

## Usage

Once the application is running, you can interact with the API using HTTP requests. Below are the available endpoints:

## API Endpoints

1. **Create User**
   - **Endpoint:** `POST /api/users`
   - **Description:** Create a new user.
   - **Authentication:** Required (Bearer Token)

2. **Get All Users**
   - **Endpoint:** `GET /api/users`
   - **Description:** Retrieve a list of all users.
   - **Authentication:** Required (Bearer Token)

3. **Get User by ID**
   - **Endpoint:** `GET /api/users/:id`
   - **Description:** Retrieve user details by ID.
   - **Authentication:** Required (Bearer Token)

4. **Update User**
   - **Endpoint:** `PATCH /api/users/:id`
   - **Description:** Update user details by ID.
   - **Authentication:** Required (Bearer Token)

5. **Delete User**
   - **Endpoint:** `DELETE /api/users/:id`
   - **Description:** Delete a user by ID.
   - **Authentication:** Required (Bearer Token)

6. **User Login**
   - **Endpoint:** `POST /api/users/login`
   - **Description:** Authenticate and login a user.
   - **Authentication:** Not Required

## Authentication

Authentication is implemented using JWT (JSON Web Tokens). To access protected endpoints, include a valid JWT token in the Authorization header using the Bearer scheme.
