<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$input = json_decode(file_get_contents('php://input'), true);

$name = isset($input['name']) ? trim($input['name']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$subject = isset($input['subject']) ? trim($input['subject']) : '';
$message = isset($input['message']) ? trim($input['message']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Your email address
$to = 'mesayboja3@gmail.com';

// Email subject
$email_subject = "Portfolio Contact: " . $subject;

// Email body
$email_body = "You have received a new message from your portfolio website.\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Subject: " . $subject . "\n\n";
$email_body .= "Message:\n" . $message . "\n\n";
$email_body .= "---\n";
$email_body .= "Sent from: " . $_SERVER['HTTP_HOST'] . "\n";
$email_body .= "Time: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $email_subject, $email_body, $headers)) {
    // Send auto-reply to visitor
    $auto_reply_subject = "Thank you for contacting Mesay!";
    $auto_reply_body = "Hi " . $name . ",\n\n";
    $auto_reply_body .= "Thank you for your message. I have received your inquiry and will get back to you within 24 hours.\n\n";
    $auto_reply_body .= "Your message:\n";
    $auto_reply_body .= "Subject: " . $subject . "\n";
    $auto_reply_body .= $message . "\n\n";
    $auto_reply_body .= "Best regards,\n";
    $auto_reply_body .= "Mesay\n";
    $auto_reply_body .= "Full Stack Developer\n\n";
    $auto_reply_body .= "Contact Info:\n";
    $auto_reply_body .= "📱 Phone: 0908216641\n";
    $auto_reply_body .= "💬 Telegram: @mesay_dev\n";
    $auto_reply_body .= "📧 Email: mesayboja3@gmail.com\n";
    
    $auto_reply_headers = "From: mesayboja3@gmail.com\r\n";
    $auto_reply_headers .= "Reply-To: mesayboja3@gmail.com\r\n";
    
    // Send auto-reply
    mail($email, $auto_reply_subject, $auto_reply_body, $auto_reply_headers);
    
    echo json_encode(['success' => true, 'message' => 'Message sent successfully! You will receive a confirmation email.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again.']);
}
?>