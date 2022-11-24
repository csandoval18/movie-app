export const setPagBtnValues = (pageNum: number | string) => {
	let page = typeof pageNum === 'string' ? parseInt(pageNum) : pageNum
	if (pageNum === 1) {
		return [1, 2, 3, 4]
	} else {
		let remainder = page % 4
		let firstPagNum = remainder === 0 ? page - 3 : page - (remainder - 1)
		return [firstPagNum, firstPagNum + 1, firstPagNum + 2, firstPagNum + 3]
	}
}
