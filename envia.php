<?php

ini_set("error_reporting",E_ALL);

$nome = $_POST['txtName'];
$email = $_POST['txtEmail'];
$telefone = $_POST['txtTel'];

// Compo E-mail
$mensagemHTML = "<p>De: " . $nome . "</p>
<p>E-mail: " . $email . "</p>
<p>Telefone: " . $telefone . "</p>";

// emails para quem será enviado o formulário
$destino = "douglascorreia17@gmail.com";
$assunto = "Contato pelo Site";
 
// É necessário indicar que o formato do e-mail é html
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type:text/html;charset=UTF-8' . "\r\n";
$headers .= 'From: ' . $nome . '<' . $email . '>' . "\r\n";
$headers .= 'Return-Path: ' . $email . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
//$headers .= "Bcc: $EmailPadrao\r\n";
   
$enviaremail = mail($destino, $assunto, $mensagemHTML, $headers);

if($enviaremail){
  echo "<script>window.location='/form';alert('$nome, sua mensagem foi enviada com sucesso! Estaremos retornando em breve.');</script>";
} else {
  echo "<script>window.location='/form';alert('$nome, a mensagem não pode ser enviada! Por favor, tente mais tarde.');</script>";
}

?>