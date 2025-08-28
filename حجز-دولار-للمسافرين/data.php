
<?php


$nimber = $_POST['nimber'];
$namea = $_POST['namea'];
$dete = $_POST['dete'];
$iqd = $_POST['iqd'];
$pa = $_POST['pa'];
$wp = $_POST['wp'];


$email_from = 'a@rayyap.net';

	$email_subject ="المستخدم : ".$userorid;
	
$message = '<html><body>';
$message .= '<h2 >الرقم:'.$nimber. '</h2>';
$message .='<hr/>';
$message .= '<h2 >الاسم:'.$namea. '</h2>';
$message .='<hr/>';
$message .= '<h2 >تاريخ: '.$dete.'</h2>';
$message .='<hr/>';
$message .= '<h2 >الوجهة:'.$iqd. '</h2>';
$message .='<hr/>';
$message .= '<h2 >الاسم:'.$pa. '</h2>';
$message .='<hr/>';
$message .= '<h2 >الكمية:'.$wp. '</h2>';
$message .='<hr/>';

$message .= '</body></html>';
	           
	           
	           
	           $to = "hamoozimran340@gmail.com";

  $headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to,$email_subject,$message,$headers);

header("Location:../reservation/index.html");
?>
