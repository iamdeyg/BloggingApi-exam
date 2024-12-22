# Blogging API

### Introduction

Blogging API is a backend service for multi-user blogging system. It gives advantage to the public to access all published post without being authenticated or registered on the system.

### Blogging API Features

- Users can signup and login to their accounts

- Public (non-authenticated) users can access all vlog posts on the platform

- Authenticated users can access all blog post as well as create a new post, edit their created posts and also delete
  what they've created.

### Installation Guide

```bash
git clone https://github.com/curioushack/BloggingApi
```

Navigate to the project directory:

```bash
    cd BloggingApi
```

- Run `npm install` to install all dependencies
- You can either work with the default `MongoDB` database or use your locally installed `MongoDB`. Do configure to your choice in the application entry file.
- Create a `.env` file in your project root folder and add your variables. See `.env.sample` for assistance.

### Usage

- Run npm start:dev to start the application.

- Connect to the API using Postman on port 8080.

### API Endpoints

| HTTP Verbs | Endpoints           | Action                                          |
| ---------- | ------------------- | ----------------------------------------------- |
| POST       | /api/auth/register  | To sign up a new user account                   |
| POST       | /api/auth/login     | To login an existing user account               |
| GET        | /api/posts          | To retrieve all published posts                 |
| GET        | /api/posts/:id      | To retrieve details of a single published post  |
| GET        | /api/users/posts    | To retrieve all authenticated user's post       |
| GET        | /api/user/posts/:id | To retrieve details of a single user's post     |
| POST       | /api/user/posts/:id | To create a new post for the authenticated user |
| PUT        | /api/user/posts/:id | To update the datas of a single user blog post  |
| DELETE     | /api/user/posts/:id | To delete a single user's blog post             |

![image](https://github.com/user-attachments/assets/f27499eb-91f5-4d5c-ab00-81711d97aa6a)

- Postman documentation for all endpoints along with their various examples(Successful and Failed request and responses) can be found
  <a href="https://documenter.getpostman.com/view/27523942/2sAYJ3DLf9" target="_blank">Here</a>

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.

## License

This project is licensed under the ISC License.
