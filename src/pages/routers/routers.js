import LogIn from "~/parts/Screen/LogIn/LogIn";
import LogInScreen from "../LogInScreen/LogInScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import FilterPage from "../FilterPage/FilterPage";
import TVShow from "../TVShow/TVShow";
import linkPage from "~/component/LinkPage/LinkPage";
import HomePage from "../HomePage/HomePage";
import MoviePage from "../MoviePage/MoviePage";
import NewMovie from "../NewMovie/NewMovie";
import MyListPage from "../MyListPage/MyListPage";

const pages = [
  { path: linkPage.login, component: LogIn , layout:LogInScreen },
  { path: linkPage.homeScreen, component: HomePage , layout:HomeScreen, subNav: null },
  { path: linkPage.tvShow, component: TVShow, layout:HomeScreen, subNav:true },
  { path: linkPage.moviePage, component: MoviePage, layout:HomeScreen, subNav:true },
  { path: linkPage.filterMovie, component: FilterPage, layout:HomeScreen, subNav:false},
  { path: linkPage.newMovie, component: NewMovie, layout:HomeScreen, subNav:null},
  { path: linkPage.myList, component: MyListPage, layout:HomeScreen, subNav:null},
];
export {pages};
