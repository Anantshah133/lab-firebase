import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Labs from './pages/Labs'
import Navbar from './components/Navbar'

const AppLayout = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/login" && <Navbar location={location} />}
            <Routes>
                <Route path='/' element={<ProtectedRoute Comp={Dashboard} />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/labs' element={<ProtectedRoute Comp={Labs} />}></Route>
            </Routes>
        </>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    )
}

export default App