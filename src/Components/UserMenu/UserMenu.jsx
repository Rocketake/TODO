import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";
import { selectUser } from "../../Redux/auth/selectors.js";
import { logOut } from "../../Redux/auth/operations.js";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.username}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
