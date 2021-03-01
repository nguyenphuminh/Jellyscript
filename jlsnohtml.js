function makeJelly(code){
	code=code.split("")
	arr=[], i=0
        for (k=0;k<99999;k++) arr[k]=0;
	code.forEach(item => {
		switch (item) {
			case "J":
				i++;
				break;
			case "E":
				i--;
				break;
			case "l":
				arr[i]++;
				break;
			case "L":
				arr[i]--;
				break;
			case "Y":
				console.log(String.fromCharCode(arr[i]));
				break;
			case "e":
				console.log('Hello, World!');
				break;
			case "y":
				console.log("I love Jelly!");
				break;
			case "_":
				console.log(" ");
				break;
			case "-":
				console.log("\n");
				break;
			case "S":
				console.log(arr[i]);
				break;
			case "A":
				console.log("Java");
				break;
			case "a":
				console.log(code.join(""))
		}
	})
}
