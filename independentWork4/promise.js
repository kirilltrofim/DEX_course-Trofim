loadScript("/article/promise-chaining/one.js")
  .then((script) => loadScript("/article/promise-chaining/two.js"))
  .then((script) => loadScript("/article/promise-chaining/three.js"))
  .then((script) => {
    one();
    two();
    three();
  });

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    alert(result);
    return result * 2;
  })
  .then(function (result) {
    alert(result);
    return result * 2;
  });
