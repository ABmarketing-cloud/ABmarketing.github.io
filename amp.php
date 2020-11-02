<?php
    if(!empty($_POST)){
		$url = 'https://finneo.by/bitrix24.php';
		$name=$_POST['name'];
		$sum=$_POST['sum'];
		$company=$_POST['company'];
		$phone=$_POST['phone'];
		$utm=$_POST['utm'];
		$address='Минск';

        $postData = array(
			'name' => $name,
			'phone' => $phone,
			'city' => $address,
			'company' => $company,
			'utm' => $utm,
			'sum' => $sum,
		);

		$curl = curl_init();

        $domain_url = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
		header("Content-type: application/json");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Origin: *.ampproject.org");
        header("AMP-Access-Control-Allow-Source-Origin: ".$domain_url);


        /*/ For Sending Error Use this code /*/
        if($curl){
			curl_setopt_array($curl, array(
				CURLOPT_SSL_VERIFYPEER => 0,
				CURLOPT_POST => 1,
				CURLOPT_HEADER => 0,
				CURLOPT_RETURNTRANSFER => 1,
				CURLOPT_FOLLOWLOCATION => 1,
				CURLOPT_URL => $url,
				CURLOPT_POSTFIELDS => $postData,
			));
			$result = curl_exec($curl);
			curl_close($curl);
			
			if( $grif = curl_init() ) {
				$api = array(
					'NAME' => $name,
					'OPPORTUNITY' => $sum,
					'ADDRESS' => $address,
					'MOBILE_PHONE' => $phone,
				);
				$api_data = json_encode($api);

				curl_setopt($grif, CURLOPT_URL, 'https://griffinconsultcompany.by/api/v1/createLead/?utm_source=suncredit');
				curl_setopt($grif, CURLOPT_RETURNTRANSFER,true);
				curl_setopt($grif, CURLOPT_POST, true);
				$headers = array();
				$headers[] = "Content-Type: application/json";
				$headers[] = "Cache-Control: no-cache";
				curl_setopt($grif, CURLOPT_HTTPHEADER, $headers);
				curl_setopt($grif, CURLOPT_POSTFIELDS, $api_data);
				$out = curl_exec($grif);
				curl_close($grif);
			}


			header("AMP-Redirect-To: https://finneo.by/griffinconsalt/credits/thanks");
			header("Access-Control-Expose-Headers: AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To");
			die();
        }
        else{
            header("HTTP/1.0 412 Precondition Failed", true, 412);
            echo json_encode(array('errmsg'=>'Some Error!'));
            die();
        }
    }?>