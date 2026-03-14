const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// @route   GET /api/admin/messages
// @desc    Get all contact messages (for admin)
// @access  Public (you can add authentication later)
router.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    
    // Create simple HTML page to view messages
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Contact Messages - Mesay Portfolio</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
          .container { max-width: 1000px; margin: 0 auto; }
          .message { background: white; margin: 20px 0; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 10px; text-align: center; }
          .meta { background: #f8f9fa; padding: 10px; border-radius: 5px; margin-bottom: 15px; }
          .message-content { line-height: 1.6; }
          .no-messages { text-align: center; color: #666; font-style: italic; }
          .count { color: #667eea; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Contact Messages</h1>
            <p>Portfolio Admin Dashboard</p>
          </div>
    `;
    
    if (messages.length === 0) {
      html += '<div class="no-messages">No messages yet. Share your portfolio to start receiving inquiries!</div>';
    } else {
      html += `<p>Total Messages: <span class="count">${messages.length}</span></p>`;
      
      messages.forEach(msg => {
        html += `
          <div class="message">
            <div class="meta">
              <strong>From:</strong> ${msg.name} (${msg.email})<br>
              <strong>Subject:</strong> ${msg.subject}<br>
              <strong>Date:</strong> ${new Date(msg.createdAt).toLocaleString()}
            </div>
            <div class="message-content">
              <strong>Message:</strong><br>
              ${msg.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `;
      });
    }
    
    html += `
        </div>
      </body>
      </html>
    `;
    
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;