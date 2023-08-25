import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ShowPost from "./pages/ShowPost";
import WritePost from "./pages/WritePost";
import SearchPost from "./pages/SearchPost";
import Nav from "./components/Nav";
import "./App.css";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import { useState } from "react";
function App() {
  const [showWrapper, setShowWrapper] = useState(false);
  return (
    <>
      <Nav setShowWrapper={setShowWrapper} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main showWrapper={showWrapper}></Main>}
          ></Route>
          <Route path="/Write" element={<WritePost></WritePost>}></Route>
          <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/auth" element={<Auth></Auth>}></Route>

          <Route path="/search" element={<SearchPost></SearchPost>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
