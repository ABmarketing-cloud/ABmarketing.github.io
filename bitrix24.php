<?php
if($_POST){
	define('CRM_HOST', 'credits.bitrix24.by');
	define('CRM_PORT', '443');
	define('CRM_PATH', '/crm/configs/import/lead.php');

	define('CRM_LOGIN', 'developer@abmarketing.by');
	define('CRM_PASSWORD', 'ablead2019');

	$firstName = $_POST['name'];
	$lastName = $_POST['lastname'];
	$secondName = $_POST['secondname'];
	$birthdate = $_POST['birthday'];
	$tel = $_POST['phone'];
	$city = $_POST['city'];
	$company = $_POST['company'];
	$utm = $_POST['utm'];
	$opportunity = $_POST['sum'];
	$url = $_POST['url'];

	$postData = array(
		'TITLE' => 'credits-house.ru',
		'COMPANY_TITLE' => $company,
		'UF_CRM_1578558014' => 'РФ',
		'UF_CRM_1578558057' => $city,
		'NAME' => $firstName,
		'LAST_NAME' => $lastName,
		'SECOND_NAME' => $secondName,
		'BIRTHDATE' => $birthdate,
		'PHONE_MOBILE' => $tel,
		'OPPORTUNITY' => $opportunity,
		'CURRENCY_ID' => 'RUB',
		'ADDRESS' => $city,
		'SOURCE_DESCRIPTION' => $utm,
		'COMMENTS' => $url
	);

	if (defined('CRM_AUTH')) {
		$postData['AUTH'] = CRM_AUTH;
		} else {
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;
	}
	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp) {
		$strPostData = '';
		foreach ($postData as $key => $value)
		$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
		
		$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
		$str .= "Host: ".CRM_HOST."\r\n";
		$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$str .= "Content-Length: ".strlen($strPostData)."\r\n";
		$str .= "Connection: close\r\n\r\n";
		
		$str .= $strPostData;
		
		fwrite($fp, $str);
		
		$result = '';
		while (!feof($fp))
		{
			$result .= fgets($fp, 128);
		}
		fclose($fp);
		
		$response = explode("\r\n\r\n", $result);
		
		$output = '<pre>'.print_r($response[1], 1).'</pre>';
		if ($city=="Москва") {
			header('Location: https://credits-house.ru//moscow/potrebitelskiy-credit/thanks/');
		} elseif ($city=="Санкт-Петербург") {
			header('Location: https://credits-house.ru/spb/potrebitelskiy-credit/thanks/');
		} else {
			header('Location: https://credits-house.ru/krasnodar/thanks/');
		}
	} else {
		echo 'Connection Failed! '.$errstr.' ('.$errno.')';
	}
}