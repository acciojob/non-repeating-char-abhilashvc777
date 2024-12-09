function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0; i<str.length-1; i++){
		for(let j=i+1; j<=str.length-1; j++){
			if(str[i]===str[j]){
			  str = str.replaceAll(str[j]," ")
			}
		}
	} 
	for(let i=0; i<=str.length-1; i++){
		if(str[i]===" "){
			str = str.replace(/^\s+$/,"")
		}
	}
	if(str===""){
		return "null"
	}else{
		return str
	}
}
const input = prompt("Enter a string"); 
alert(firstNonRepeatedChar(input)); 
