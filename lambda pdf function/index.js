const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const PDFDocument = require('pdfkit');

exports.handler = async (event) => {
    const bucket = 'image2pdf-akshitnaagar';
    const { files } = JSON.parse(event.body); // Array of S3 file keys
    const pdfKey = 'uploads/converted-output.pdf'; // S3 location for the converted PDF
    
    const doc = new PDFDocument();

    // Create a writable stream to upload the PDF to S3
    const s3UploadParams = {
        Bucket: bucket,
        Key: pdfKey,
        Body: doc,
        ContentType: 'application/pdf'
    };

    // Start PDF generation
    doc.pipe(s3.uploadStream(s3UploadParams));

    for (const file of files) {
        const image = await s3.getObject({ Bucket: bucket, Key: file }).promise();
        doc.addPage()
           .image(image.Body, { fit: [500, 500], align: 'center', valign: 'center' });
    }

    // Finalize the PDF generation
    doc.end();

    const pdfUrl = `https://${bucket}.s3.amazonaws.com/${pdfKey}`;

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true, pdfUrl: pdfUrl })
    };
};
