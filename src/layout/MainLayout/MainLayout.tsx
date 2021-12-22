import { Box } from "@mui/material"
import AppBar from "../../components/reworked/AppBar/AppBar"
import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import CatalogPage from "../../pages/CatalogPage/CatalogPage"
import { CarPage } from "../../pages/CarPage/CarPage"

import "./MainLayout.scss"

const MainLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/cars')
  }, [])

  return (
    <Box className="main">
      <AppBar />
      <Box className="content">
        <Routes>
          <Route path='cars' element={<CatalogPage />}/>
          <Route path='cars/:id' element={<CarPage />}/>
        </Routes>
      </Box>
    </Box>
  )
}
export default MainLayout