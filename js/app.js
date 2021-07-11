function simpleMathOps(int1, int2){
    var solution = (int1 + int2) * 5;
    return solution
}
//passing 1 argument with a string length over 10 in conditional statement. Length property returns length of string
function checkStrLength(str1){
    if (str1.length > 10){
        return true;
    }else{
        return false;
    }
}

//Passing 1 argument in function as a list of array. Use .startWith method will return true or false
function returnFirstOcc(arr1){
    var arr1 = ["jake", "sam", "phobe", "pho", "macy"];
    var arrayLength = arr1.length;
    
    for (var i = 0; i < arrayLength; i++){
        if (arr1[i].startsWith("ph") == true){
            return arr1[i];
        }
    }
    //Error catching for no occurances of "ph" in array
    for (var i = 0; i < arrayLength; i++){
        if (arr1[i].startsWith("ph") == false){
            return "String not found";
        }
    }
}

//Function1 return arguments
console.log("Function1");
console.log(simpleMathOps(1,2));
console.log(simpleMathOps(5,3));
console.log(simpleMathOps(2,2));

//Function2 return arguments
console.log("Function2");
console.log(checkStrLength("peanutbutternutella")); //over 10 chars
console.log(checkStrLength("happy")); //5 chars
console.log(checkStrLength("programmin")); //10 chars

//Function3 return arguments
console.log("Function3");
console.log(returnFirstOcc("array1"));
console.log(returnFirstOcc("array2"));
console.log(returnFirstOcc("array3"));


