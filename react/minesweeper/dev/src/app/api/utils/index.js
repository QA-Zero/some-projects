import { Map, List } from 'immutable';


export const initTiles = ({ rowLength, colLength, mines }) => {
	const generateBoard = (rowLength, colLength, mines) => {
		const singleCell = {
			     rowIndex: -1,
			     colIndex: -1,
			   minesCount: -1,
			aroundIndexes: [],
			       isMine: true,
			    isChecked: false,
			    isFlagged: false
		};

		const repeat = (n, value) => {
			const array = [];

			while (n--) {
				array.push(value);
			}

			return List(array);
		};
		const tile = Map(singleCell);
		const cellsMine = repeat(mines, tile);
		const cellsSafe = repeat(
			rowLength * colLength - mines,
			tile.setIn(['isMine'], false)
		);

		return cellsMine.concat(cellsSafe);
	};
	const sortCells = board => board.sort(
		() => Math.random() - 0.5
	);
	const updateCoord = (board, rowLength) => board.map(
		(tile, index) => (tile
			.setIn(
				['rowIndex'],
				index - Math.floor(index / rowLength) * rowLength
			)
			.setIn(
				['colIndex'],
				Math.floor(index / rowLength)
			)
		)
	);
	const updateEnvironment = (board, rowLength, colLength) => {
		const getAroundTilesIndex = index => {
			const getEnvironment = (rowIndex, colIndex) => {
				const getTilesIndex  = (rowIndex, colIndex) => colIndex * rowLength + rowIndex;
				const checkAvailable = (rowIndex, colIndex) => (
					(rowIndex >= 0) && (rowIndex < rowLength)
					&&
					(colIndex >= 0) && (colIndex < colLength)
				);

				return [
					{
						       name: 'n',
						      index: getTilesIndex(rowIndex, colIndex - 1),
						isAvailable: checkAvailable(rowIndex, colIndex - 1)
					},
					{
						       name: 'ne',
						      index: getTilesIndex(rowIndex + 1, colIndex - 1),
						isAvailable: checkAvailable(rowIndex + 1, colIndex - 1)
					},
					{
						       name: 'e',
						      index: getTilesIndex(rowIndex + 1, colIndex),
						isAvailable: checkAvailable(rowIndex + 1, colIndex)
					},
					{
						       name: 'se',
						      index: getTilesIndex(rowIndex + 1, colIndex + 1),
						isAvailable: checkAvailable(rowIndex + 1, colIndex + 1)
					},
					{
						       name: 's',
						      index: getTilesIndex(rowIndex, colIndex + 1),
						isAvailable: checkAvailable(rowIndex, colIndex + 1)
					},
					{
						       name: 'sw',
						      index: getTilesIndex(rowIndex - 1, colIndex + 1),
						isAvailable: checkAvailable(rowIndex - 1, colIndex + 1)
					},
					{
						       name: 'w',
						      index: getTilesIndex(rowIndex - 1, colIndex),
						isAvailable: checkAvailable(rowIndex - 1, colIndex)
					},
					{
						       name: 'nw',
						      index: getTilesIndex(rowIndex - 1, colIndex - 1),
						isAvailable: checkAvailable(rowIndex - 1, colIndex - 1)
					}
				]
			};
			const aroundTilesInfo = getEnvironment(
				board.getIn([index, 'rowIndex']),
				board.getIn([index, 'colIndex'])
			);

			return new List(
				aroundTilesInfo
					.filter(tileInfo => tileInfo.isAvailable)
					.map(tileInfo => tileInfo.index)
			);
		};

		return board.map(
			(tile, index) => tile
				.setIn(
					['aroundIndexes'],
					getAroundTilesIndex(index)
				)
				.setIn(
					['minesCount'],
					getAroundTilesIndex(index)
						.map(index => board.getIn([index]))
						.filter(nearTile => nearTile.getIn(['isMine']))
						.size
				)
		);
	};

	return (
		updateEnvironment(
			updateCoord(
				sortCells(
					generateBoard(rowLength, colLength, mines)
				),
				rowLength,
			),
			rowLength,
			colLength
		)
	);
};

export const getBoard = tiles => tiles.reduce(
	(rows, tile, tilesIndex) => {
		const boardCell = {
			tilesIndex,
			tile: tile.toJS()
		};

		const colIndex = tile.getIn(['colIndex']);
		const row = rows.getIn([colIndex]);

		if (row) {
			const newRow = row.push(boardCell);
			return rows.setIn([colIndex], newRow);
		}
		else {
			const newRow = new List([boardCell]);
			return rows.push(newRow);
		}
	},
	new List()
);