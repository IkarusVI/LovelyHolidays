import './App.css'
import { Route, Routes, BrowserRouter, } from 'react-router-dom';
import Home from './components/Home'
import Test from './components/Test'

function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Test />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
