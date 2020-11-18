var flipAndInvertImage = function (A) {
  var res = [];
  A.forEach(items => {
    let newarray = items.map(i => {
      return i === 1 ? 0 : 1
    })
    res.push(newarray.reverse());
  });
  return res;
};

flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]])
console.log(r)