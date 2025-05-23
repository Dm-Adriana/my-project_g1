import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/menu'   
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<BlogPage/>}/>
    </Routes>
  )
}

export default App
