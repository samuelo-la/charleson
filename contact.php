<?php
header('Content-Type: text/html; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: no-referrer');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo '<h1>Method Not Allowed</h1>';
    exit;
}

$name = trim($_POST['name']);
$contact = trim($_POST['contact']);
$message = trim($_POST['message']);
$company = trim($_POST['company']);

if (!empty($company)) {
    http_response_code(400);
    echo '<h1>Error: Honeypot field should be empty.</h1>';
    exit;
}

if (strlen($name) < 1 || strlen($name) > 100) {
    http_response_code(400);
    echo '<h1>Error: Name must be between 1 and 100 characters.</h1>';
    exit;
}

if (strlen($contact) < 5 || strlen($contact) > 100) {
    http_response_code(400);
    echo '<h1>Error: Contact must be between 5 and 100 characters.</h1>';
    exit;
}

if (strlen($message) < 1 || strlen($message) > 1000) {
    http_response_code(400);
    echo '<h1>Error: Message must be between 1 and 1000 characters.</h1>';
    exit;
}

$to = 'admin@chalson.ng';
$subject = 'Contact Form Submission';
$headers = "From: noreply@chalson.ng\r\n";

if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers .= "Reply-To: " . $contact . "\r\n";
} else {
    $message = "Contact: " . $contact . "\nMessage: " . $message;
}

mail($to, $subject, $message, $headers);

http_response_code(200);
echo '<h1>Success: Your message has been sent!</h1>';