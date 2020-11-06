if (document.querySelector(`script[type="text/jellyscript"]`) != null){
	let code = document.querySelector(`script[type="text/jellyscript"]`).innerHTML;
	code = code.split("");
	let arr=[];
	let i=0;
	for (k=0;k<29999;k++){
		arr[k]=0;
	}
	for (j=0;j<code.length;j++){
		switch (code[j]) {
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
				document.write(String.fromCharCode(arr[i]));
				break;
			case "j":
				arr[i] = prompt();
				break;
			case "e":
				document.write('Hello, World!');
				break;
			case "y":
				document.write("I love Jelly!");
				break;
			case "_":
				document.write(" ");
				break;
			case "-":
				document.write("<br/>");
		}
	}
}