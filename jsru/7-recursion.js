var sum = function(from, to, shift){
    if(from === to){
        console.log(shift + from);        
        return from;
    }
    else{
        console.log(shift + from + " !== " + to);
    }

    console.log(shift + "returning " + from + " + inner sum");
    innerSum = sum(from + 1, to, shift + "\t")
    console.log(shift + "inner sum is " + innerSum);

    return from + innerSum
}
console.log(sum(1,5, ""));