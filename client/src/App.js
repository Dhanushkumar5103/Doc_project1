import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Feed from './components/feed'
import Appointment from './components/Appointment'
import Location from './components/Location'
import Admin from './components/Admin'
import Slot from './components/Slot'
import Book from './components/Book'
import Verify from './components/verify'
import Last from './components/last'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/admin" element={<Admin />} />
          <Route path = "/home" element={<Home />} />
          <Route path = "/feed" element={<Feed />} />
          <Route path = "/appointment" element={<Appointment />} />
          <Route path = "/location" element={<Location />} />
          <Routes path="/admin">
              <Route path="/" element={<Admin />} />
              <Route path="/create" element={<CreateD />} />

          </Routes>
          <Route path = "/book/:id" element={<Book />} />
          <Route path = "/verify/:id" element={<Verify />} />
          <Route path = "/slot/:id" element={<Slot />} />
          <Route path='/last' element={<Last />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
