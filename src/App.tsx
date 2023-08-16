import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Images } from "./pages/images";
import { PageWrap } from "./pages/PageWrap";
import { Images18 } from "./pages/images18";
import { Memes } from "./pages/memes";
import { Animes } from "./pages/animes";
import { Unsorted } from "./pages/unsorted";
import { Apart } from "./pages/apart/Apart";
import { Adverb } from "./pages/adverb/Adverb";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/admin/login" element={<Auth />} />
            <Route path="/admin" element={<PageWrap page={<Unsorted />} />} />
            <Route
              path="/admin/:page"
              element={<PageWrap page={<Unsorted />} />}
            />
            <Route
              path="/admin/12plus"
              element={<PageWrap page={<Images />} />}
            />
            <Route
              path="/admin/12plus/:page"
              element={<PageWrap page={<Images />} />}
            />
            <Route
              path="/admin/18plus"
              element={<PageWrap page={<Images18 />} />}
            />
            <Route
              path="/admin/18plus/:page"
              element={<PageWrap page={<Images18 />} />}
            />
            <Route path="/admin/mem" element={<PageWrap page={<Memes />} />} />
            <Route
              path="/admin/mem/:page"
              element={<PageWrap page={<Memes />} />}
            />
            <Route
              path="/admin/anime"
              element={<PageWrap page={<Animes />} />}
            />
            <Route
              path="/admin/anime/:page"
              element={<PageWrap page={<Animes />} />}
            />
            <Route
              path="/admin/apart"
              element={<PageWrap page={<Apart />} />}
            />
            <Route
              path="/admin/adverb"
              element={<PageWrap page={<Adverb />} />}
            />
            <Route
              path="*"
              element={
                <div className="center">
                  <p>Страница не найдена</p>
                </div>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
