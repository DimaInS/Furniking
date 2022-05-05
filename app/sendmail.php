<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Excepion;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail ->Charset = 'UTF-8';
$mail ->setLanguage('ru', 'phpmailer/language/');
$mail ->IsHTML(true);

// Від кого лист
$mail ->setFrom('dmadam@gmail.com', 'незнайомець');
// Кому відправити
$mail ->addAddress('dmadamchuk@gmail.com');
// Тема Листа
$mail ->Subject = 'Цікавий лист';

// Рука
$hand = "Права";
if($_POST['hand'] == "left") {
  $hand = "Ліва";
}

// Тіло Листа
$body = '<h1>Зустрічайте листа</h1>';

if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Ім?я</strong>'$._POST['name'].'</p> ';
}
if(trim(!empty($_POST['email']))){
  $body.='<p><strong>E-mail</strong>'$._POST['email'].'</p> ';
}
if(trim(!empty($_POST['hand']))){
  $body.='<p><strong>Рука</strong>'.$hand'</p> ';
}
if(trim(!empty($_POST['age']))){
  $body.='<p><strong>Вік</strong>'$._POST['age'].'</p> ';
}
if(trim(!empty($_POST['message']))){
  $body.='<p><strong>Повідомлення</strong>'$._POST['message'].'</p>';
}

// Додати файл
if (!empty($FILES['image']['tmp_name'])) {
  // шлях завантаження файлу
  $filePath = __DIR__ ."/files/" .$_FILES['image']['name'];
  // Завантажуемо файл
  if (copy($_FILES['image']['tmp_name'],$filePath)){
    $fileAttach = $filePath;
    $body.='<p><strong>Фото у додатках</strong></p>';
  }
}

$mail->Body = $body;

// Відправка
if (!$mail->send()) {
  $message = 'Помилка';
} else {
  $message = 'Дані відправленні!'
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>

