import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import ShowPost from './pages/ShowPost';
import WritePost from './pages/WritePost';
import SearchPost from './pages/SearchPost';
import Nav from './components/Nav';
import './App.css';
import DetailPost from './pages/DetailPost';
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
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/Write' element={<WritePost></WritePost>}></Route>
          <Route path='/post/' element={<ShowPost></ShowPost>}></Route>
          <Route
            path='/post/:postID'
            element={<DetailPost></DetailPost>}
          ></Route>
          <Route path='/search' element={<SearchPost></SearchPost>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
