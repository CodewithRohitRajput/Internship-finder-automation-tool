# 🚀 Automated Internship Email Sender (Node.js)

A simple automation tool built with Node.js that reads recruiter data from a CSV file and sends personalized internship application emails with your resume attached.

---

## 📌 Features

* 📄 Read recruiter data from CSV file
* 📧 Send personalized emails using Nodemailer
* ⏱️ Built-in delay to avoid spam detection
* 📎 Resume attachment support
* 🔐 Secure credentials using `.env`
* ⚡ Lightweight and beginner-friendly

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Nodemailer
* CSV Parser (`csv-parser`)

---

## 📂 Project Structure

```
project-root/
│
├── recruiters.csv        # Input data (Name, Company, Email)
├── rohit_resume.pdf      # Resume file
├── index.js              # Main server file
├── .env                  # Environment variables
├── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file in root:

```
EMAIL=your_email@gmail.com
PASS=your_app_password
```

👉 Use Gmail App Password (not your real password)

---

### 4️⃣ Prepare CSV file

Create `recruiters.csv`:

```
Name,Company,Email
Test User,DemoTech,your_email@gmail.com
```

---

### 5️⃣ Add your resume

Place your resume file:

```
rohit_resume.pdf
```

---

### 6️⃣ Run the project

```
node index.js
```

---

## 📧 How It Works

1. Reads CSV file using stream
2. Converts each row into an object
3. Sends email using Nodemailer
4. Waits (delay) before sending next email

---

## ⚠️ Important Notes

* Do NOT send too many emails at once
* Recommended: 10–20 emails/day
* Always test using your own email first
* Gmail requires App Password

---

## 🚀 Future Improvements

* Add React dashboard
* Email tracking (open/click)
* Auto follow-up emails
* AI-generated personalized emails
* Job scraping integration

---

## 🤝 Contributing

Pull requests are welcome. Feel free to improve this project.

---

## ⭐ Support

If you found this useful, give it a ⭐ on GitHub!

---

## 👨‍💻 Author

Rohit Rajput
Full Stack Developer (MERN)

---
