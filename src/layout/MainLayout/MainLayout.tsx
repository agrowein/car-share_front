import { Box } from '@mui/material'
import AppBar from '../../components/reworked/AppBar/AppBar'
import { Route, Routes } from "react-router-dom";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";

import './MainLayout.scss'

const MainLayout = () => {
  return (
    <Box className="main">
      <AppBar />
      <Box className="content">
        <Routes>
          <Route path='catalog' element={<CatalogPage />}/>
        </Routes>
      </Box>
    </Box>
  )
}
export default MainLayout