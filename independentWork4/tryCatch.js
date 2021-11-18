function func() {
  try {
    alert("начало");
    throw new Error("ошибка");
  } catch (e) {
    if ("не могу обработать ошибку") {
      throw e;
    }
  } finally {
    alert("очистка!");
  }
}

func();

//Деление на ноль
function div(a, b) {
	if (b !== 0) {
		return a / b;
	} else {
		throw new Error('ошибка деления на ноль');
	}
}

try {
	throw {name: 'MyError', message: 'текст'};
} catch (error) {
	console.log(error.name); // 'MyError'
	console.log(error.message); // 'текст'
}