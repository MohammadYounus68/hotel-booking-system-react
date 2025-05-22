import React from 'react'
import Header from './components/Header/Header'
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import AllRoom from './components/pages/AllRoom';
import RoomDetails from './components/pages/RoomDetails';
import MyBookings from './components/pages/MyBookings';
import HotelReg from './components/HotelReg';
import Layout from './components/pages/HotelOwner/Layout';
import DashBoard from './components/pages/HotelOwner/DashBoard';
import AddRomm from './components/pages/HotelOwner/AddRomm';
import ListRoom from './components/pages/HotelOwner/ListRoom';
function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Header/>}
      {false && < HotelReg/>}
      <div className='min-h-[70vh]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rooms' element={<AllRoom/>}/>
            <Route path='/rooms/:id' element={<RoomDetails/>}/>
            <Route path='/my-bookings' element={<MyBookings/>}/>
            <Route path='/owner' element={<Layout/>}>
                <Route index element={<DashBoard/>}/>
                <Route path='add-room' element={<AddRomm/>}/>
                <Route path='list-room' element={<ListRoom/>}/>
            </Route>
          </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
