<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: text/html');

echo file_get_contents("http://dev.frevend.com/json/users.json");