import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ShowPost from "./pages/ShowPost";
import WritePost from "./pages/WritePost";
import Login from "./pages/Login";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/Write" element={<WritePost></WritePost>}></Route>
          <Route path="/post/:postID" element={<ShowPost></ShowPost>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
