var integer = -11213478;

function reverse(x) {
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;
  let string = Math.abs(x).toString();
  let array = string.split("");
  let reverse = array.reverse();
  let str2 = reverse.join("");
  if (x < 0) {
    let value = -Number(str2);
    return value < min ? 0 : value
  } else {
    let value = Number(str2);
    return value > max ? 0 : value
  }
}

let s = reverse(integer);
console.log(s)