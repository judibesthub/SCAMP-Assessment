<script>

var fib=function(num){
	if (num === 1){
		return 0;
	}
	if (num === 2){
		return 1;
	}
	return fib(num - 1) + fib(num - 2);
};
console.log(fib(7));


//1. 0
//2. 1
//3. 1
//4. 2
//5. 3
//6. 5
//7. 8

</script>