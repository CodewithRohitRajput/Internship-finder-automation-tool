import express from 'express'
import dotenv from 'dotenv'
import fs from 'fs'
import csv from 'csv-parser'
import { pipeline } from 'stream'
import nodemailer from 'nodemailer'

dotenv.config()
const app = express();
const port = 8000;
app.use(express.json());

const array = []

const transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : process.env.Email,
        pass : process.env.EMAIL_PASS
    }
})

const stream =  fs.createReadStream('./recruiters.csv')
.pipe(csv())
stream.on("data", (data) =>{
    array.push(data)
})
stream.on("end", async ()=>{
    for(let row of array){
    try{

        await transporter.sendMail({
            from : '',
            to : row.Email,
            subject : `Internship at ${row.Company}`,
            html: `
              <p>Hi ${row.Name},</p>
              <p>I am interested in opportunities at ${row.Company}.</p>
              <p>Resume attached.</p>
               `,
           attachments: [
           {
            filename: "rohit_resume.pdf",
             path: "./rohit_resume.pdf"
           }
           ]
        })

        console.log(`email sent to  ${row.Email}`)
        await new Promise(r => setTimeout(r,60000))
    }catch(err){
        console.log(err)
    }
}
})





app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})