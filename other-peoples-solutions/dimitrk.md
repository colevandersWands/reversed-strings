# [Dimitrk](https://www.codewars.com/users/dimitrk)'s Solution

```js
function solution(str){
  let reversed = ''
  let length = str.length;
  for(let i =0; i < length; i++) {
    reversed += str[length - (i+1)];
  }
  return reversed;
}
```
---

## Solution Explanation

This solution starts by creating an empty string.  Then in a for loop, she concatenates the letters in reverse order from the argument to the new string.  Finally she returns the newly constructed string.


---

## Language Features

Dimitrk used a couple String features:
* Concatenation
* String.length
* String indexing

And a for loop checked by the length of the string.


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

