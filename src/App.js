import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const login = useSelector((state) => state.login.isLogin);
  return (
    <Fragment>
      <Header />
      {!login && <Auth />}
      {login && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
