<?php


header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html');
require_once('db_connect.php');


class SimpleClass {
	public function main() {
		if (isset($_POST['data'])) {
			$request = json_decode($_POST['data'], true);
			$dbClass = new DbClass();
			$dbInfo = $dbClass->getDbInfo();

			foreach ($request as $operation) {
				switch ($operation['taskAction']) {
					case 'add_task':
						$this->addTask($dbInfo, $operation['value']);
						break;

					case 'delete_task':
						$this->deleteTask($dbInfo, $operation['id']);
						break;

					case 'update_task':
						$this->updateTask($dbInfo, $operation['id'], $operation['value']);
						break;

					case 'done_task':
						$this->doneTask($dbInfo, $operation['id']);
						break;

					default:
						echo 'Unknown action: ' . $operation['action']; 
						break;
				}
			}

			echo 'Success';
		}
	}

	public function addTask($dbInfo, $value) {
		$sql_main = '
			insert into
				tasks (value)
			values
				("' . $value . '")
		';
		$sql_time = '
			update
				last_update
			set
				time="' . $this->getMiliTime() . '"
			where
				id="1"
		';

		$dbInfo['connect']->query($sql_main);
		$dbInfo['connect']->query($sql_time);
	}
	public function deleteTask($dbInfo, $id) {
		$sql_main = '
			delete from
				tasks
			where
				id="' . $id . '"
		';
		$sql_time = '
			update
				last_update
			set
				time="' . $this->getMiliTime() . '"
			where
				id="1"
		';

		$dbInfo['connect']->query($sql_main);
		$dbInfo['connect']->query($sql_time);
	}
	public function updateTask($dbInfo, $id, $value) {
		$sql_main = '
			update
				tasks
			set
				value="' . $value . '"
			where
				id="' . $id . '"
		';
		$sql_time = '
			update
				last_update
			set
				time="' . $this->getMiliTime() . '"
			where
				id="1"
		';

		$dbInfo['connect']->query($sql_main);
		$dbInfo['connect']->query($sql_time);
	}
	public function doneTask($dbInfo, $id) {
		$sql_main = '
			update
				tasks
			set
				is_done="1"
			where
				id="' . $id . '"
		';
		$sql_time = '
			update
				last_update
			set
				time="' . $this->getMiliTime() . '"
			where
				id="1"
		';

		$dbInfo['connect']->query($sql_main);
		$dbInfo['connect']->query($sql_time);
	}

	public function getMiliTime() {
		return round(
			microtime(true) * 1000
		);
	}
}


$obj = new SimpleClass();
$obj->main();