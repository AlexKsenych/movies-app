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
                <Route path='/' element={<Content />} />
                <Route path='/tv' element={<Content />} />
                <Route path='/search' element={<Content />} />
                <Route
                    path='/movie/:id'
                    element={<CurrentItem actionType='movie' />}
                />
                <Route
                    path='/tv/:id'
                    element={<CurrentItem actionType='tv' />}
                />
            </Routes>
        </div>
    )
}

export default App
