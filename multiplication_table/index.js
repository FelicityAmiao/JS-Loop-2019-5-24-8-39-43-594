var multiplicationTable = "";
for(let i = 1; i <=9; i++){
	for(let j = 1; j <= i; j++){
		multiplicationTable += i + "*" + j + "=" + (i*j) + " ";
	}
	multiplicationTable += "\n";
}
console.log(multiplicationTable);