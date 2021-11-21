const url = "https://jsonplaceholder.typicode.com/todos";
const requestURL = "https://jsonplaceholder.typicode.com/users";

let user = {
  name: 'Kirill',
  age: 20
};

const getUser = (method, url) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then((r) => r.json());
};

getUser("POST", requestURL).then((data) => console.log(data));