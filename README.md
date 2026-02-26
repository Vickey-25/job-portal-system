# Enterprise Job Portal System

A full-stack enterprise-level Job Portal application built using Spring Boot, React, MySQL, and JWT Authentication. This platform enables recruiters to post jobs and students to apply securely, with role-based authentication and real-time application tracking.

This project follows enterprise architecture standards and demonstrates full-stack development skills suitable for production environments.

---

## Features

### Authentication & Security
- User Registration (Student / Recruiter)
- Secure Login using JWT Authentication
- Role-based access control
- Protected routes
- Logout functionality
- Secure REST API communication

### Student Features
- Register and login securely
- View all available jobs
- Apply for jobs
- Application stored in MySQL database
- Student dashboard interface

### Recruiter Features
- Recruiter login
- Post new job listings
- View student applications
- Recruiter dashboard panel
- Track applicants for each job

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Framer Motion

### Backend
- Spring Boot
- Spring Security
- JWT Authentication
- REST API
- JPA (Hibernate)

### Database
- MySQL

### Tools & IDE
- VS Code
- IntelliJ IDEA
- MySQL Workbench
- Git & GitHub

---

## System Architecture
React Frontend
↓
Spring Boot REST API
↓
Service Layer
↓
Repository Layer (JPA / Hibernate)
↓
MySQL Database


---

## Database Tables

### Users Table
| Column | Description |
|------|-------------|
| id | User ID |
| name | Full Name |
| email | User Email |
| password | Encrypted Password |
| role | STUDENT / RECRUITER |

### Jobs Table
| Column | Description |
|------|-------------|
| id | Job ID |
| title | Job Title |
| company | Company Name |
| location | Job Location |
| salary | Salary |
| description | Job Description |

### Applications Table
| Column | Description |
|------|-------------|
| id | Application ID |
| job_id | Job ID |
| student_name | Applicant Name |
| student_email | Applicant Email |
| status | Application Status |

---

## Project Structure

job-portal-system
│
├── frontend
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── services
│ │ ├── App.jsx
│ │
│ ├── package.json
│
├── backend
│ ├── controller
│ ├── model
│ ├── repository
│ ├── security
│ ├── JobportalApplication.java
│
└── README.md


---

## Security Implementation

- JWT Authentication
- Spring Security
- Protected Routes
- Role-based access
- Secure REST APIs

---

## Screens Available

- Login Page
- Register Page
- Student Dashboard
- Recruiter Dashboard
- Post Job Page
- Applications Page

---

## Resume Project Description

Enterprise Job Portal System developed using Spring Boot, React, MySQL, and JWT Authentication. Implemented secure authentication, role-based access, job posting, and job application features. Designed REST APIs using Spring Boot and integrated frontend using React. Used MySQL with JPA/Hibernate for database management.

---

## Skills Demonstrated

- Full Stack Development
- Java Spring Boot
- React Development
- REST API Development
- JWT Authentication
- Database Design
- MVC Architecture
- Secure Application Development

---

## Author

Vignesh  
Final Year Engineering Student  
Java Full Stack Developer  

---

## Future Enhancements

- Resume Upload Feature
- Profile Management
- Email Notifications
- Cloud Deployment (AWS / Render)
- Admin Panel

---

## License

This project is created for educational and portfolio purposes.
