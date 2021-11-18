function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

loadScript("/my/script.js", function () {
  newFunction();
});

loadScript("/my/script.js", function (script) {
  alert(`Здорово, скрипт ${script.src} загрузился, загрузим ещё один`);

  loadScript("/my/script2.js", function (script) {
    alert(`Здорово, второй скрипт загрузился`);
  });
});
