import './App.sass';
import Header from '../Header';
import Content from '../Content';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/topmovies' element={<Content actionType='top'/>}/>
        <Route path='/newmovies' element={<Content actionType='newMovies'/>}/>
        <Route path='/tvshows' element={<Content actionType='tvShows'/>}/>
        <Route path='/random'/>
      </Routes>
    </div>
  );
}

export default App;
