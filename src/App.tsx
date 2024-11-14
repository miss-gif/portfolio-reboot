import { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import BasicSpeedDial from "./components/common/BasicSpeedDial";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import AboutPage from "./pages/AboutPage";
import AccountInfoPage from "./pages/AccountInfoPage";
import BoardPage from "./pages/BoardPage";
import ChartsPage from "./pages/ChartsPage";
import ContactPage from "./pages/ContactPage";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/HomePage";
import InterviewPage from "./pages/InterviewPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostEditorPage from "./pages/PostEditorPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectPage from "./pages/ProjectPage";
import SignupPage from "./pages/SignupPage";
import Test from "./Test";
import { Theme } from "./types/theme";
import TestPostPage from "./TestPostPage";
import TestDetailPage from "./TestDetailPage";
import TestEditorPage from "./TestEditorPage";
import ProjectForm from "./pages/ProjectForm";

const Layout = ({ toggleTheme, theme }: Theme) => (
  <>
    <Header toggleTheme={toggleTheme} theme={theme} />
    <Outlet />
    <Footer />
    <BasicSpeedDial />
  </>
);

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout toggleTheme={toggleTheme} theme={theme} />}
      >
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="project/:id" element={<ProjectDetailPage />} />
        <Route path="interview" element={<InterviewPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="charts" element={<ChartsPage />} />
        {/* auth */}
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="accountinfo" element={<AccountInfoPage />} />
        {/* 게시판 */}
        <Route path="board" element={<BoardPage />} />
        <Route path="post/write" element={<CreatePostPage />} />
        <Route path="post/:postId" element={<PostDetailPage />} />
        <Route path="post/:postId/edit" element={<PostEditorPage />} />
      </Route>

      <Route path="/test" element={<Test />} />
      <Route path="/test/write" element={<TestPostPage />} />
      <Route path="/test/:postId" element={<TestDetailPage />} />
      <Route path="/test/:postId/edit" element={<TestEditorPage />} />
      <Route path="/input" element={<ProjectForm />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
