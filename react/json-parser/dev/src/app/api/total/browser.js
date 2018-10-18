export const getPageNumber = () => {
	const number = localStorage.getItem('pageNumber');
	return number ? number : 1;
};
export const savePageNumber = pageNumber => {
	localStorage.setItem(
		'pageNumber',
		pageNumber.toString()
	);
};
export const setPageDefault = () => {
	savePageNumber(1);
};