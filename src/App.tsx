import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import { Images } from "./pages/images";
import { PageWrap } from "./pages/PageWrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/admin/auth" element={<Auth />} />
          <Route
            path="/admin"
            element={
              <PageWrap>
                <Images />
              </PageWrap>
            }
          />
          <Route
            path="/admin/page/:page"
            element={
              <PageWrap>
                <Images />
              </PageWrap>
            }
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
  );
}

export default App;
