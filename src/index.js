//React
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
//Remember at deploy - switch to HashRouter!
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
//Styles
import "./index.css";
//Routes
import App from "./App";
import Om from "./routes/om";
import Skills from "./routes/skills";
import Kontakt from "./routes/kontakt";
import Blog from "./routes/blog";
import BlogPost from "./routes/blogPost";
import Home from "./routes/home";
import NoMatch from "./routes/noMatch";
import BlogLandingPage from "./routes/blogLandingPage";

//Testing
import reportWebVitals from "./reportWebVitals";
//Render med createRoot
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="om" element={<Om />} />
        <Route path="skills" element={<Skills />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="blog" element={<Blog />}>
          <Route index element={<BlogLandingPage />} />
          <Route path=":blogPostId" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </Hashgit Router>
);
