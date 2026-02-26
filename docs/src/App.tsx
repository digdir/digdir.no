import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import HowWeDesign from "./pages/HowWeDesign";
import DesignFoundation from "./pages/DesignFoundation";
import DesignFoundationPage from "./pages/DesignFoundationPage";
import GitHubWorkflow from "./pages/GitHubWorkflow";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/designfundament" element={<DesignFoundation />} />
        <Route
          path="/designfundament/utviklingsprosess"
          element={<HowWeDesign />}
        />
        <Route
          path="/designfundament/:slug"
          element={<DesignFoundationPage />}
        />
        <Route path="/arbeidsflyt" element={<GitHubWorkflow />} />
        <Route path="/blogg" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Redirect old route */}
        <Route path="/how-we-design" element={<HowWeDesign />} />
      </Route>
    </Routes>
  );
}
