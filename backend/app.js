import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' }); // This stores uploaded files in the 'uploads/' folder

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vrrahul3001@gmail.com', // Replace with your Gmail
    pass: 'nplm sbyr epez qamn',  // Replace with your Gmail App password (not your regular password)
  },
});

// Route to handle contact form submissions
app.post('/api/send-email', upload.single('file'), async (req, res) => {
  const { name, email, message, experience, jobTitle} = req.body;
  const file = req.file;

  // Compose email
  const mailOptions = {
    from: email,
    to: 'info@vrdentaldesign.com', // Replace with your Gmail address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message} \nExerience: ${experience} \nJobTitle: ${jobTitle}`,
    attachments: [
      {
        filename: file.originalname,
        path: file.path,  // Path to the uploaded file
      },
    ],
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up: remove the file after sending
    fs.unlinkSync(file.path);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
