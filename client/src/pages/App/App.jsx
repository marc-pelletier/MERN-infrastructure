import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'

import NavBar from '../../components/NavBar/NavBar'

import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'

export default function App() {
  const [user, setUser] = useState(getUser())



  return (
      <div className='App'>
        {
          user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
        }
      </div>
  )
}
