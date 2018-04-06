// Your code here

function reversed_strings(str)  {
  if (str.length % 2 == 0) {
    let length = str.length;
    for (let i = 0; i <= length/2; i++ ) {
      let holder = str[i];
      str[i] = str[length - i]
      str[length - i] = holder;
    };
  } 
  else {
    let length = str.length - 1;
    for (let i = 0; i <= length/2; i++ ) {
      let holder = str[i];
      str[i] = str[length - i]
      str[length - i] = holder;
    };
  }
  return str;
};

// Be sure it's the cleanest code you can write!
