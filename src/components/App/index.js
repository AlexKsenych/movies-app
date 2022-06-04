import './App.sass'
import Header from '../Header'
import Content from '../Content'
import { Routes, Route } from 'react-router-dom'
import CurrentItem from '../CurrentItem'

function App() {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path='/movies-app/' element={<Content />} />
                <Route path='/movies-app/tv' element={<Content />} />
                <Route path='/movies-app/search' element={<Content />} />
                <Route
                    path='/movies-app/movie/:id'
                    element={<CurrentItem actionType='movie' />}
                />
                <Route
                    path='/movies-app/tv/:id'
                    element={<CurrentItem actionType='tv' />}
                />
            </Routes>
        </div>
    )
}

export default App
