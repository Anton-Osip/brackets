module.exports = function check(str, bracketsConfig) {
	let myBracketsConfig = bracketsConfig.map(item => item[0] + item[1])
	let myStr = str
	let count = str.length

	do {
		count--
		myBracketsConfig.forEach(element => {
			myStr=myStr.replace(element, '')
		})
	} while (count !== 0)
	return myStr.length === 0
}
