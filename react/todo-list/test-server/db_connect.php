<?php


class DbClass {
	public function getDbInfo() {
		$_host     = 'mysql.zzz.com.ua';
		$_dbName   = 'qazero';
		$_username = 'qazero';
		$_pass     = 'Qq123456';

		$mysqli = new mysqli($_host, $_username, $_pass, $_dbName);
		$mysqli->set_charset('utf8');

		if ($mysqli->connect_errno) {
			echo 'Db error connect';
		}
		else {
			return array(
				'connect' => $mysqli,
				     'db' => $_dbName
			);
		}
	}
}