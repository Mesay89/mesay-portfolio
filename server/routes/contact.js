const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'mesayboja3@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// @route   POST /api/contact
// @desc    Send contact message
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save to database
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    // Send email notification to you
    const mailOptions = {
      from: process.env.EMAIL_USER || 'mesayboja3@gmail.com',
      to: 'mesayboja3@gmail.com', // Your email where you want to receive messages
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #667eea;">
            <h3>Message:</h3>
            <p>${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 5px;">
            <p><strong>Reply to:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Send auto-reply to the person who contacted you
    const autoReply = {
      from: process.env.EMAIL_USER || 'mesayboja3@gmail.com',
      to: email,
      subject: 'Thank you for contacting Mesay!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I have received your inquiry and will get back to you within 24 hours.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3>Your message:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p>${message}</p>
          </div>
          <p>Best regards,<br><strong>Mesay</strong><br>Full Stack Developer</p>
          <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 5px; text-align: center;">
            <p>📱 Phone: 0908216641</p>
            <p>💬 Telegram: @mesay_dev</p>
            <p>📧 Email: mesayboja3@gmail.com</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReply);

    res.json({ message: 'Message sent successfully! I will reply within 24 hours.' });
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Even if email fails, still save to database
    try {
      const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      });
      await newContact.save();
    } catch (dbError) {
      console.error('Database save error:', dbError);
    }
    
    res.json({ message: 'Message received! I will get back to you soon.' });
  }
});

module.exports = router;