import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import ShowPost from "./pages/ShowPost";
import WritePost from "./pages/WritePost";
import SearchPost from "./pages/SearchPost";
import Nav from "./components/Nav";
import DetailPost from "./pages/DetailPost";
import Login from "./pages/Login";
import Auth from "./pages/Auth";

//context
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [showWrapper, setShowWrapper] = useState(false);

  //조회 관리
  const [selectedUniv, setSelectedUniv] = useState("all");
  const [category, setCategory] = useState("all");

  //검색 관리
  const [searchKeyword, setSearchKeyword] = useState();

  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav showWrapper={showWrapper} setShowWrapper={setShowWrapper} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                showWrapper={showWrapper}
                selectedUniv={selectedUniv}
                setSelectedUniv={setSelectedUniv}
                setCategory={setCategory}
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
              ></Main>
            }
          ></Route>
          <Route path="/write" element={<WritePost></WritePost>}></Route>
          <Route
            path="/post/"
            element={
              <ShowPost
                selectedUniv={selectedUniv}
                category={category}
              ></ShowPost>
            }
          ></Route>
          <Route
            path="/post/:postID"
            element={<DetailPost></DetailPost>}
          ></Route>
          <Route
            path="/search"
            element={<SearchPost searchKeyword={searchKeyword}></SearchPost>}
          ></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/auth" element={<Auth></Auth>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
