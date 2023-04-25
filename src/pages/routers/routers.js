import SignUpScreen from "../../parts/SignUpScreen/SignUpScreen";
import HomeScreen from "../../parts/HomeScreen/HomeScreen";
import FilterPage from "../FilterPage/FilterPage";
import TVShow from "../TVShow/TVShow";
import linkPage from "~/pages/LinkPage/LinkPage";
import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviePage/MoviePage";
import NewMovie from "../NewMovie/NewMovie";
import MyListPage from "../MyListPage/MyListPage";
import SignUp from "~/pages/SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import SignInScreen from "~/parts/SignInScreen/SignInScreen";

const pages = [
  { path: linkPage.signUp, component: SignUp , layout:SignUpScreen },
  { path: linkPage.signIn, component: SignIn , layout: SignInScreen },
  { path: linkPage.homeScreen, component: HomePage , layout:HomeScreen, subNav: null },
  { path: linkPage.tvShow, component: TVShow, layout:HomeScreen, subNav:true },
  { path: linkPage.moviePage, component: MoviePage, layout:HomeScreen, subNav:true },
  { path: linkPage.filterMovie, component: FilterPage, layout:HomeScreen, subNav:false},
  { path: linkPage.newMovie, component: NewMovie, layout:HomeScreen, subNav:null},
  { path: linkPage.myList, component: MyListPage, layout:HomeScreen, subNav:null},
];
export {pages};
