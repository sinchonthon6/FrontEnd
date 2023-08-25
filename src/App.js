import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ShowPost from "./pages/ShowPost";
import WritePost from "./pages/WritePost";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import GlobalStyles from "./styles";
import Mypage from "./pages/Mypage";
import Search from "./pages/Search";
import Auth from "./pages/Auth";
function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/Write" element={<WritePost></WritePost>}></Route>
          <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
          <Route path="/auth" element={<Auth></Auth>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/MyPage" element={<Mypage></Mypage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
