import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import { pipeline } from "stream";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();
const port = 8000;
app.use(express.json());

const array = [];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email,
    pass: process.env.EMAIL_PASS,
  },
});

const stream = fs.createReadStream("./recruiters.csv").pipe(csv());
stream.on("data", (data) => {
  array.push(data);
});
stream.on("end", async () => {
  for (let row of array) {
    try {
      await transporter.sendMail({
        from: "",
        to: row.Email,
        subject: `Full Stack Intern Application at ${row.Company}`,

        html: `
  <p>Hi ${row.Name},</p>

  <p>
  I’m Rohit, a Full Stack Developer with around 1 year of experience, and I’ve worked with 2 startups. I’ve also won 4 hackathons.</p>

  <p>
    I’m currently looking for an internship opportunity at <b>${row.Company}</b> where I can contribute from day one and continue learning in a fast-paced environment.
  </p>

  <p>
    I’ve attached my resume for your review. I’d really appreciate the opportunity to connect and explore if there’s a fit.
  </p>

  <p>
    Thank you for your time.<br/><br/>
    Rohit Rajput<br/>
    Phone: 6367710137<br/>
    Portfolio: https://rohitportfolio-bay.vercel.app/<br/>
    GitHub: https://github.com/CodewithRohitRajput
  </p>
`,

        attachments: [
          {
            filename: "rohit_resume.pdf",
            path: "./Fake_Resume.pdf",
          },
        ],
      });

      console.log(`email sent to  ${row.Email}`);
      await new Promise((r) => setTimeout(r, 60000));
    } catch (err) {
      console.log(err);
    }
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
