## 🌍 BharatFd_Backend_Project

The Multilingual FAQ System delivers frequently asked questions (FAQs) in multiple languages with a robust Node.js backend and Redis caching for lightning-fast responses. It ensures seamless language selection and efficient content management for a smooth user experience.

## 🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js, Redis , MongoDB

Security: HTTPS enabled via Let’s Encrypt 🔒

## 🚀 Getting Started

## 👅 Clone the Repository

GitHub Repository:

Multilingual FAQ System

```bash
git clone https://github.com/Rajnish2000/BharatFd_Backend_Project
cd BHaratFD_Backend-Project
```

## 👖 Backend Deployment

Backend API:

```bash
cd faq-app-api
npm install
```

## 🚀 Set Up Environment Variables

Make sure you set up the necessary environment variables:

````bash
export MONGODB_URI="your-mongodb-uri"

API Endpoint (Example): `http://127.0.0.1:5000/api/faqs`
Admin API Endpoint: `http://127.0.0.1:5000/api/faqs/admin/` (only accessible by authorized users)
Example API Usage:

```bash
# for Signup of admin
curl http://127.0.0.1:5000/api/faqs/admin/signup

# for login of admin
curl http://127.0.0.1:5000/api/faqs/admin/login

# Fetch FAQs in English (default)
curl http://127.0.0.1:5000/api/faqs

# Fetch FAQs in Hindi
curl http://127.0.0.1:5000/api/faqs?lang=hi

# Fetch FAQs in Bengali
curl http://127.0.0.1:5000/api/faqs?lang=bn

# Create a new FAQ
curl http://127.0.0.1:5000/api/faqs/admin/create

# Update an existing FAQ (replace :id with the actual FAQ ID)
curl  http://127.0.0.1:5000/api/faqs/admin/:id/update

# Delete an existing FAQ (replace :id with the actual FAQ ID)
curl http://127.0.0.1:5000/api/faqs/admin/:id/delete
````

## 📌 Summary

The Multi-language FAQ Application delivers frequently asked questions (FAQs) in multiple languages with a robust Node.js backend and Redis caching for lightning-fast responses 🚀

🎯 Features:

🏆 Multilingual Support: Dynamic FAQ translations.

⚡ Optimized Performance: Redis caching for faster responses.

🔒 Secure API: HTTPS-enabled backend.

🖥️ Admin Panel: Easy management of FAQs.

## My Name: Rajnish Kumar Singh

## Email: [rajsinghdj4@gmail.com](rajsinghdj4@gmail.com)

## Linkedin: [https://www.linkedin.com/in/rajnish-singh-5b7a371a6/](https://www.linkedin.com/in/rajnish-singh-5b7a371a6/)

## GitHub: [https://github.com/Rajnish2000](https://github.com/Rajnish2000)

Enjoy exploring and contributing! 🚀🔥

## **\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***
