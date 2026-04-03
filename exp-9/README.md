# 🔐 JWT Authentication System with Spring Security

  

This project is a simple backend system that demonstrates how authentication works using **Spring Security + JWT (JSON Web Tokens)**.

  

Instead of relying on sessions, it uses a **stateless approach**, where users authenticate once and then use a token to access protected APIs.

* * *

## ⚙️ What this project does

*   Lets users **register and log in**
    
*   Generates a **JWT token** after successful login
    
*   Secures endpoints so only authenticated users can access them
    
*   Validates every request using a **custom JWT filter**
    
*   Stores user data in a relational database
    

* * *

## 🧰 Tech Used

*   Java
    
*   Spring Boot
    
*   Spring Security
    
*   JWT (jjwt library)
    
*   Hibernate (JPA)
    
*   MySQL
    
*   Maven
    

* * *

## 🧱 Project Layout

  

The project follows a layered structure:

    Controller → handles requests
    Service → contains business logic
    Repository → interacts with database
    Entity → defines database models
    Config → security configuration
    Filter → JWT validation logic

* * *

## 🔄 How authentication works (simple view)

1.  User sends credentials to /login
    
2.  Server verifies username + password
    
3.  If valid → JWT token is generated
    
4.  Token is sent back to the user
    
5.  User includes token in future requests:
    

    Authorization: Bearer <token>

5.    
    
6.  Server validates token before allowing access
    

* * *

## 📡 API Endpoints

  

### Public routes

    POST /register
    POST /login

* * *

### Protected routes

    GET /students

👉 Requires:

    Authorization: Bearer <your_token>

* * *

## 🔐 Security Setup

*   Passwords are encrypted using **BCrypt**
    
*   No sessions are stored (stateless system)
    
*   Custom **JWT filter** runs before authentication
    
*   Only authorized requests can hit protected APIs
    

* * *

## 🧪 Testing (Postman flow)

1.  Register a user
    
2.  Login → get JWT token
    
3.  Copy token
    
4.  Add it to headers:
    

    Authorization: Bearer <token>

4.    
    
5.  Hit protected endpoints
    

* * *

## ▶️ Running the project

    git clone <your-repo-link>
    cd exp-9
    mvn spring-boot:run

* * *

## 📸 Screenshots

  <img width="1367" height="799" alt="terminal" src="https://github.com/user-attachments/assets/6709cc15-fd86-442b-be45-cfae7f26762d" />
<img width="1277" height="797" alt="register" src="https://github.com/user-attachments/assets/c01c5029-0d8f-4485-b298-3801d4b94dc0" />
<img width="1281" height="802" alt="login" src="https://github.com/user-attachments/assets/99bb7d01-be83-40a4-a5fd-c29f50cc40dc" />
<img width="1276" height="798" alt="students" src="https://github.com/user-attachments/assets/10f477a6-b2af-45a0-926c-1e01e8ca7c98" />



* * *

## 🧠 What I learned from this

*   How Spring Security actually works under the hood
    
*   Difference between session-based vs token-based auth
    
*   How JWT is created, signed, and validated
    
*   How to secure APIs properly
    
