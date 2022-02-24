module.exports = function toReadable (number) {
    const oneSymbol = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
    }

    const twoSymbol = {
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
        0: "twenty",
    }

    const threeSymbol = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }

    if (number>=0 && number<=10 ){
        return oneSymbol[number];
    }

    if (number > 10 && number < 21){
    	return twoSymbol[number.toString()[1]];
    }

    if (number > 20 && number < 100){
    	if (number.toString()[1] == "0"){
    		return threeSymbol[number.toString()[0]];
    	} else {
    		return threeSymbol[number.toString()[0]] + " " + oneSymbol[number.toString()[1]];
    	}
    }

    if (number > 99 && number < 1000){
    	if (number.toString()[1] == "0" && number.toString()[2] == "0")
    		return oneSymbol[number.toString()[0]] + " hundred";
    	if (number.toString()[1] == "0")
            return oneSymbol[number.toString()[0]] + " hundred " + oneSymbol[number.toString()[2]];
        if (number.toString()[1] == "1" && number.toString()[2] == 0) 
            return oneSymbol[number.toString()[0]] + " hundred ten";
        if (number.toString()[1] == "1") 
            return oneSymbol[number.toString()[0]] + " hundred " + twoSymbol[number.toString()[2]]
    	if (number.toString()[2] == "0")
    		return oneSymbol[number.toString()[0]] + " hundred " + threeSymbol[number.toString()[1]];
    	else 
    		return oneSymbol[number.toString()[0]] + " hundred " + threeSymbol[number.toString()[1]] + " " + oneSymbol[number.toString()[2]];
    }
}