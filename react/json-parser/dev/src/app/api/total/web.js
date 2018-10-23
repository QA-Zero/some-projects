import photo from '$assets/img/photo.png';


export default () => (
	fetch('http://kspace-mailer.hol.es/index.php')
		.then(response =>
			response.json()
				.then(data =>
					data.users.map(
						user => ({
							...user,
							photo: photo
						})
					)
				)
			)
);