<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html');
require_once('db_connect.php');


class SimpleClass {
	public function main() {
		if (isset($_POST['data'])) {
			$dbClass = new DbClass();
			$dbInfo = $dbClass->getDbInfo();

			$data = json_decode($_POST['data'], true);

			if ($data['isFirstRequest']) {
				echo json_encode(
					$this->getAllTasks($dbInfo)
				);
			}
			else {
/*
				while ($data['time'] > $this->getLastTableUpdate($dbInfo)) {
					usleep(500000);
				}

				echo json_encode(
					$this->getAllTasks($dbInfo)
				);
*/
				if ($data['time'] > $this->getLastTableUpdate($dbInfo)) {
					echo json_encode(
						$this->getAllTasks($dbInfo)
					);
				}
				else {
					echo json_encode(
						'Nothing'
					);
				}
			}
		}
	}

	public function getLastTableUpdate($dbInfo) {
		$sql = '
			select
				time
			from
				last_update
			where
				id="1"
		';
		$queryResult = $dbInfo['connect']->query($sql);

		if ($queryResult) {
			$row = $queryResult->fetch_assoc();

			if ($row) {
				return $row['time'] + 0;
			}
			else {
				die( 'Empty row' );
			}
		}
		else {
			die( 'Error queryResult' );
		}
	}

	public function getAllTasks($dbInfo) {
		$sql = '
			select
				*
			from
				tasks
		';

		$queryResult = $dbInfo['connect']->query($sql);

		if ($queryResult) {
			$result = array();

			while( $row = $queryResult->fetch_assoc() ) {
				$result[] = array(
					    'id' => intval($row['id']),
				     'value' => $row['value'],
				    'isDone' => !!$row['is_done']
				);
			}

			return $result;
		}
		else {
			die( 'Error queryResult' );
		}
	}
}


$obj = new SimpleClass();
$obj->main();