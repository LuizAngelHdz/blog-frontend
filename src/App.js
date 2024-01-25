import "./App.css";
import { Home } from "./pages/Home";
import { BasicLayout, FullScreenLayout } from "./Layout";
import { Routes, Route } from "react-router-dom";
import { PostDetail } from "./pages/PostDetail/PostDetail";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { AdminPost } from "./pages/AdminPost";

function App() {
  const routes = [
    {
      path: "/",
      component: Home,
      layout: FullScreenLayout,
      exact: true,
    },
    {
      path: "/post/:id",
      component: PostDetail,
      layout: BasicLayout,
      exact: true,
    },
    {
      path: "/login",
      component: PostDetail,
      layout: BasicLayout,
      exact: true,
    },
    {
      path: "/createPost",
      component: AdminPost,
      layout: BasicLayout,
      exact: true,
    },
  ];
  return (
    <div className="App">
      {routes.map((item) => (
        <Routes key={item.path}>
          <Route
            path={item.path}
            exact={item.exact}
            element={
              <item.layout>
                <item.component />
              </item.layout>
            }
          />
        </Routes>
      ))}
    </div>
  );
}

export default App;
