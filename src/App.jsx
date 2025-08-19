import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App