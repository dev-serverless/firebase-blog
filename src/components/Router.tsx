import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import Login from "pages/login";
import Signup from "pages/signup";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";

type routerProps = {
  isAuthenticated: boolean;
};

const Router = ({ isAuthenticated }: routerProps) => {
  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
};

export default Router;
