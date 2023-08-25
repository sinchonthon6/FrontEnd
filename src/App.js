import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import ShowPost from './pages/ShowPost';
import WritePost from './pages/WritePost';
import SearchPost from './pages/SearchPost';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/Write' element={<WritePost></WritePost>}></Route>
          <Route path='/post/:postID' element={<ShowPost></ShowPost>}></Route>
          <Route path='/search' element={<SearchPost></SearchPost>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
