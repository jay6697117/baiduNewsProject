'use strict';

function multiline(foo) {
  let str = foo.toString();
  // console.log(str);

  let arr = str.split('\n');
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    arr[index] = element.replace(/^\s+|\s+$/g, '');
  }
  // console.log(arr);

  let arrSlice = arr.slice(2, arr.length - 2);
  // console.log(arrSlice);

  let strRes = arrSlice.join('\n');
  return strRes;
}

function foo() {
  /*
  这  是一个
  多  行注释
  请  注意呀
  哈哈  是的
  注意  空格
  我去除了首尾的
  空格  啦！
  */
}
console.log(multiline(foo));
