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