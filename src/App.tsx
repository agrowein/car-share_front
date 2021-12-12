import React from 'react'
import { CssBaseline } from '@mui/material'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import {
  ErrorLayout,
  LoginLayout,
  MainLayout,
} from './layout'


function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
          <Route path='/login' element={<LoginLayout />} />
          <Route path='*' element={<ErrorLayout />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
