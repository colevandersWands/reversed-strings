```js
function solution(str){
  if (str.length === 0) {
    return '';
  } else {
    return solution(str.substr(1)) + str[0];
  }
}
```