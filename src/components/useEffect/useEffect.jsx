import { useState, useEffect } from "react";

const AppUseEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  return (
    <div>
      <p>You clicked {value} times</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};

//useEffect(callback, deps) приймає два аргументи:

// callback - функція, усередині якої виконується вся логіка ефекту. Наприклад, запити на сервер, завдання обробників подій на документ і т.п.
// залежності - масив змінних, при зміні будь-якого з яких, буде запускатися ефект і виконуватися callback. Це може бути стан, пропси або будь-яке локальне значення всередині компонента.
