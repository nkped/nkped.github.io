//React
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
//Styles
import "./index.css";
//App
import App from "./App";
import Om from "./routes/om";
import Apps from "./routes/apps";
import Blog from "./routes/blog";
import BlogPost from "./routes/blogPost";
import Home from "./routes/home";
import NoMatch from "./routes/noMatch";

//Testing
import reportWebVitals from "./reportWebVitals";
//Render med createRoot
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="om" element={<Om />} />
          <Route path="apps" element={<Apps />} />
          <Route path="blog" element={<Blog />}>
            <Route path=":blogPostId" element={<BlogPost />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
