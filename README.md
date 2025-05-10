# 🖼️ Image to PDF Converter 

This project is a serverless web application that allows users to upload multiple images and convert them into a single PDF file. It uses the following AWS services:

- **AWS Lambda** – to handle the image processing and PDF creation.
- **API Gateway** – to expose the Lambda function via a REST endpoint.
- **Amazon S3** – to store processed PDFs.
- **AWS Amplify** – to host the frontend.
- **IAM** – to control access permissions between services.

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
