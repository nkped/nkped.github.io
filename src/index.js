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
import Apps from "./routes/apps";
import Kontakt from "./routes/kontakt";
import BlogPostList from "./routes/blogPostList";
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
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="om" element={<Om />} />
        <Route path="apps" element={<Apps />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="blogPostList" element={<BlogPostList />}>
          <Route index element={<BlogLandingPage />} />
          <Route path=":blogPostId" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
