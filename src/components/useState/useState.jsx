import { useEffect, useState } from "react";
import css from "../feedback.module.css";
// import '../styles.css'

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export const AppUseState = () => {
  const [value, setValue] = useState(0);

  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");


  // const handleEmailChange = event => {
  //   setEmail(event.target.value)
  // }
  //   const handlePasswordChange = event => {
  //   setPassword(event.target.value)
  // }

  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default: return;
    }
  };

  useEffect(() => {
    console.log('email useEffect');
    window.localStorage.setItem('email', JSON.stringify(email));
  }, [email]);

    useEffect(() => {
    console.log('password useEffect');
    window.localStorage.setItem('password', JSON.stringify(password));
  }, [password]);


  return (
    <div>
      {value}
      <button className={css.button} type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>

      <form className={css.search_form} autoComplete="off">
        <label htmlFor="">
        <span>Email</span>
          <input
            autoComplete="off"
            className={css.search_form_input}
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          ></input>
        </label>
        <label htmlFor="">
        <span>Password</span>
          <input
            autoComplete="off"
            className={css.search_form_input}
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          ></input>
        </label>
        <button className={css.button} type='submit'>Sign in</button>
      </form>
    </div>
  );
};