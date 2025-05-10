# 🖼️ Image to PDF Converter 

This project is a serverless web application that allows users to upload multiple images and convert them into a single PDF file. It uses the following AWS services:

- **AWS Lambda** – to handle the image processing and PDF creation.
- **API Gateway** – to expose the Lambda function via a REST endpoint.
- **Amazon S3** – to store processed PDFs.
- **AWS Amplify** – to host the frontend.
- **IAM** – to control access permissions between services.
- **Amazon CloudWatch** - for logging and monitoring.
- **AWS Resource Policy** - controls cross-service permissions (not a service, but part of IAM)

🟢 Hosted via AWS Amplify: https://static.d11834rh3l5vh9.amplifyapp.com

---

## 🚀 Features

- Upload multiple images from the browser.
- Preview selected images.
- Send images to a backend API (via API Gateway).
- Process the images in an AWS Lambda function to generate a PDF.
- Show a success or error message to the user.

---

## 📁 Project Structure

📦image-to-pdf-converter

┣ 📁frontend/

┃ ┣ 📄index.html

┃ ┣ 📄style.css

┃ ┗ 📄backend.js

┣ 📁lambda/

┃ ┗ 📄image_to_pdf.py

┣ 📄README.md

---

## 🖥️ AWS Architecture Overview

- AWS Amplify hosts and deploys the static frontend (HTML/JS/CSS)

- Amazon API Gateway routes HTTP POST requests to the backend Lambda

- AWS Lambda handles the image-to-PDF conversion logic

- Amazon S3 stores the images and generated PDF files or logs

- IAM Policies & Lambda Resource Policies securely allow API Gateway to invoke Lambda

- CORS Configuration on API Gateway enables secure cross-origin requests from the frontend

- CloudWatch Logs help debug Lambda executions and monitor errors

- Amazon SNS (optional) can notify users or systems after a PDF is generated

![image](https://github.com/user-attachments/assets/c41eabd1-af5b-42bf-a8cb-098d062bc929)

---

## 💻 Frontend Deployment

- Host index.html, style.css, and backend.js on AWS Amplify.

- Ensure the JavaScript uses the correct endpoint:
 fetch('https://<API_ID>.execute-api.us-east-1.amazonaws.com/prod/convert', {
   method: 'POST',
   body: formData
 });

---

## 📥 How to Run

- Clone the repo

- Deploy the Lambda via AWS Console

- Deploy the frontend via Amplify

- Test using browser or Postman

---

## 🔐 Security Notes

- Consider restricting CORS to only your Amplify domain.

- Validate file types and size in Lambda.

- Add API keys or usage plans for rate limiting.

---

## 🧪 Testing

- Open the frontend in the browser.

- Select multiple image files.

- Click the upload/convert button.

- Observe the PDF generation status.

---

## 📌 Known Issues

- Some image formats may not convert correctly if not handled in the Lambda code.

- Large files may cause timeouts if Lambda execution time isn't increased.

---

## 📄 License

Feel free to fork, modify, and use.

---

## 👨‍💻 Author

Built by Anshul Choudhary(E22CSEU0954), Akshit Naagar(E22CSEU0944) & Mohit Jakhar(E22CSEU0941).

Special thanks to AWS for their APIs and infrastructure.

---

