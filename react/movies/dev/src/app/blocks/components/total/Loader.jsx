import React, { Fragment } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import '$a/styles#/total/Loader.css';


const Progress = () => <CircularProgress
	className="spinner"
	size={60}
	thickness={5}
/>;

const Count = ({ style, count }) => <div
	className="searchCount"
	style={style}
>Found <span>{count}</span> films:</div>;

const Vote = ({ style, vote }) => <div
	className="voteAverage"
	style={style}
>Average vote: <span>{vote}</span></div>;

const Loader = ({ children, style, isLoading, count, vote }) => {
	return (
		<Fragment>
			{
				isLoading === 0
					? <Progress />
					: <Fragment>
						{
							count === 0
								? vote === 0
									? null
									: <Vote style={style.vote} vote={vote} />
								: vote === 0
									? <Count style={style.count} count={count} />
									: <Fragment>
										<Count style={style.count} count={count} />
										<Vote style={style.vote} vote={vote} />
									</Fragment>
						}
						{children}
					</Fragment>
			}
		</Fragment>
	);
};


export default Loader;