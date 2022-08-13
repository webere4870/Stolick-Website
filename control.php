<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$from = "test@hostinger-tutorials.com";
$to = "matthew@msphilosophy.com";
$subject = "Checking PHP mail";
$message = "Name: " . $_POST['name'] . "Email: " . $_POST['email'] . "\nMessage: " . $_POST['message'];
$headers = "From:" . $_POST['name'];
if(mail($to,$subject,$message, $headers)) {
    echo "The email message was sent.";
} else {
    echo "The email message was not sent.";
}
?>