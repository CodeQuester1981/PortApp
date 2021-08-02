import Index1 from "./pages/Index1/Index1";
import Index2 from "./pages/Index2/Index2";
import Index3 from "./pages/Index3/Index3";
import Index4 from "./pages/Index4/Index4";
import Index5 from "./pages/Index5/Index5";
import Index6 from "./pages/Index6/Index6";
import Index7 from "./pages/Index7/Index7";
import Index8 from "./pages/Index8/Index8";
import Index9 from "./pages/Index9/Index9";
import NewsPage from "./components/Blog/NewsPage";
import RogPost from "./components/Blog/RogPost";
import Laduma from "./components/Blog/Laduma";
import Nxd from "./components/Blog/Nxd";
import Streamer from "./components/Blog/Streamer";
import Enation from "./components/Blog/Enation";

const routes = [
  { path: "/news", component: NewsPage },
  { path: "/news/1", component: RogPost },
  { path: "/news/2", component: Laduma },
  { path: "/news/3", component: Nxd },
  { path: "/news/4", component: Streamer },
  { path: "/news/5", component: Enation },
  { path: "/home-nine", component: Index9 },
  { path: "/home-eight", component: Index8 },
  { path: "/home-seven", component: Index7 },
  { path: "/home-six", component: Index6 },
  { path: "/home-five", component: Index5 },
  { path: "/home-four", component: Index4 },
  { path: "/home-three", component: Index3 },
  { path: "/home-two", component: Index2 },
  { path: "/home-one", component: Index1 },
  { path: "/", component: Index1 },
];

export default routes;
