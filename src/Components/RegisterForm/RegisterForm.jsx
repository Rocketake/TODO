import { useDispatch } from "react-redux";
import { register } from "../../Redux/auth/operations.js";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements;

    dispatch(
      register({
        username: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
