import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../store/login";

const Header = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.isLogin);

  const logoutHandler = () => {
    dispatch(loginAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {login && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
