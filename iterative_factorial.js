var factorial = function(n) {
    var result = 1;
    println ("result is "+result);
    for (var i = 2; i<= n ; i++){
        result = result * i ;
    }

    return result;
};

println("The value of 5! should be " + 5*4*3*2*1);
println("The value of 5! is " + factorial(5));
println("The value of 0! should be 1");
println("The value of 0! is " + factorial(0));

