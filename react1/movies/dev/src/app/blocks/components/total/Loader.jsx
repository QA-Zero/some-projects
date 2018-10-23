import React, { Fragment } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import '$a/styles#/total/Loader.css';


const Progress = () => <CircularProgress
	className="spinner"
	size={60}
	thickness={5}
/>;

const Count = ({ style, count }) => (
	<div
		className="searchCount"
		style={style}
	>Found <span>{count}</span> films:</div>
);

const Vote = ({ style, average, notVoted }) => (
	<div
		className="voteAverage"
		style={style}
	>
		Average vote: <span className="num">{average}</span>
		{
			notVoted === 0
				? null
				: <span> (not voted: <span className="num">{notVoted}</span>)</span>
		}
	</div>
);

const Loader = ({ children, style, isLoading, count, votes }) => {
	const countInfo = {
		style: style.vote,
		count: count
	};
	const voteInfo = {
		   style: style.vote,
		 average: votes.average,
		notVoted: votes.notVoted
	};

	return (
		<Fragment>
			{
				isLoading === 0
					? <Progress />
					: <Fragment>
						{
							count === 0
								? votes.average === 0
									? null
									: <Vote {...voteInfo} />
								: votes.average === 0
									? <Count {...countInfo} />
									: <Fragment>
										<Count {...countInfo} />
										<Vote {...voteInfo} />
									</Fragment>
						}
						{children}
					</Fragment>
			}
		</Fragment>
	);
};


export default Loader;