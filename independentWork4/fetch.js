//HTTP статус
let response = await fetch(url);

if (response.ok) {
  let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}

//Заголовок запроса
let response = fetch(protectedUrl, {
  headers: {
    Authentication: "secret",
  },
});
