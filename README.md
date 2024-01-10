# Career Connect Hub

A web-based job site application built with Node.js and MongoDB, allowing users to search, post, and apply for jobs.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Job Site Application is designed to connect job seekers with available opportunities. It provides a platform for users to search for jobs, submit job applications, and for recruiters/employers to post job listings.

## Features

- **User Authentication**: Sign up and log in functionality for job seekers and recruiters.
- **Job Listings**: Browse available job listings with detailed information.
- **Job Search**: Search for jobs based on keywords, location, or category.
- **Application Submission**: Job seekers can apply to job listings.
- **Job Posting**: Recruiters can post new job listings.
- **User Profiles**: Personalized profiles for both job seekers and recruiters.

## Installation

1. Clone the repository.
    ```
    git clone https://github.com/RafiulAlam98/CareerConnect-Hub-Api
    ```
2. Install dependencies.
    ```
    cd job-site-app
    npm install
    ```

## Usage

To start the application, run:
```bash
npm run dev
 The application will be accessible at http://localhost:3000.
```
## Endpoints

### Authentication

- `POST /api/v1/auth/login`
  - **Description:** Log in existing user.
  - **Request Body:** 
    ```
    {
        "email": "user@example.com",
        "password": "password123"
    }
    ```

### Jobs

- `GET /api/v1/jobs`
  - **Description:** Get all available job listings.
  - **Response:** Array of job objects.

- `GET /api/v1/jobs/:id`
  - **Description:** Get details of a specific job by ID.
  - **Response:** Job object.

- `POST /api/v1/jobs`
  - **Description:** Post a new job listing.

- `POST /api/v1/applied-jobs`
  - **Description:** Apply for a job.



### Users

- `GET /api/v1/users/:id`
  - **Description:** Get user profile details by ID.
  - **Response:** User profile object.

- `PUT /api/v1/users/:id`
  - **Description:** Update user profile details.
  - **Request Body:** Updated user details.
  - **Response:** Updated user profile object.

- `DELETE /api/v1/users/:id`
  - **Description:** Delete user profile by ID.
  - **Response:** Success message.


