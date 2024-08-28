export const formatNumber = number => {
	let numberHalves = number.toString().split('.')
	
	let frontNumber = numberHalves[0]
	
	let backNumber = ''
	if (numberHalves.length > 1 && numberHalves[1] != '') {
		backNumber += '.' + numberHalves[1]
	}

	let withCommas = backNumber

	let numbersPrepended = 0
	let index = frontNumber.length - 1
	let neededPunctuation = ''
	while(index >= 0) {
		if ( numbersPrepended % 3 == 0) {
			withCommas = neededPunctuation + withCommas
			neededPunctuation = ','
		}
		withCommas = frontNumber[index] + withCommas
		numbersPrepended += 1
		index -= 1
	}
	
	return withCommas
}