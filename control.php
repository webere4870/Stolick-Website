<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = "test@hostinger-tutorials.com";
$to = "matthew@msphilosophy.com";
$subject = "Checking PHP mail";
$message = "Name: " . htmlspecialchars($_POST['name']) . "\nEmail: " . htmlspecialchars($_POST['email']) . "\nMessage: " . htmlspecialchars($_POST['message']);
$headers = "From:" . "msphilosophy.com";
if(mail($to,$subject,$message, $headers)) {
    header("Location: ./redirect.html", true, 301);
    exit();
} else {
    echo "The email message was not sent.";
}
?>