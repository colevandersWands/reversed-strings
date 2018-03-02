function solution(str){

    // Step 1. Use the split() method to return a new array
    var split = str.split(""); // var split = "world".split("");
    // ["w", "o", "r", "l", "d"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverse = split.reverse(); // var reverse = ["h", "e", "l", "l", "o"].reverse();
    // ["d", "l", "r", "o", "w"]
 
    //Step 3. Return the reversed string
    return reverse.join("") // "dlrow"
};

// solution written by MzLovelyj - https://www.codewars.com/users/MzLovelyj