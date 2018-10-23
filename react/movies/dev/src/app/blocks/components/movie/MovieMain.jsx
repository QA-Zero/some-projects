import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import NavMain from '$a/cont#/movie/navigation/NavMain.js';
import Button from '@material-ui/core/Button';

import Routes from '$a/routes#/index.js';
import movieRoutes from '$a/routes#/movieRoutes.js';

import '$a/styles#/movie/MovieMain.css';


class MovieMain extends Component {
	render() {
		const { parentPath, searchUrl } = this.props;

		return (
			<Fragment>
				<div className="navigation">
					<NavMain parentPath={parentPath} />
				</div>

				<div className="foundContent">
					<Routes
						urls={movieRoutes}
						parentPath={parentPath}
					/>
				</div>

				<div className="backBtnBlock">
					<Link to={searchUrl}>
						<Button
							variant="contained"
							color="secondary"
						>Back to search</Button>
					</Link>
				</div>
			</Fragment>
		);
	}
}


export default MovieMain;