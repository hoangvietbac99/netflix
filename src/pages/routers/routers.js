import Home from "../Home";
import Profile from "../Profile";

const publicRouters = [];

const privateRouters = [
  { path: "/", component: Home },
  { path: "/profile", component: Profile },
];
export { privateRouters, publicRouters };
