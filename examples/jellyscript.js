if (document.querySelector(`script[type="text/jellyscript"]`) != null){
	let code = document.querySelector(`script[type="text/jellyscript"]`).innerHTML.split(""), arr=[], i=0;
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
				document.write(String.fromCharCode(arr[i]));
				break;
			case "j":
				arr[i]=prompt();
				break;
			case "e":
				document.write('Hello, World!');
				break;
			case "y":
				document.write("I love Jelly!");
				break;
			case "_":
				document.write("&nbsp");
				break;
			case "-":
				document.write("<br/>");
				break;
			case "S":
				document.write(arr[i]);
				break;
			case "A":
				document.write("<i>Java</i>");
		}
	})
}