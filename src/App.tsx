import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './router/index';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Create from './pages/Create';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path='Create' element={<Create/>}/>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
