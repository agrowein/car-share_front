import { Box } from '@mui/material'
import AppBar from '../../components/AppBar/AppBar'
import { Route, Routes } from "react-router-dom";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";

const MainLayout = () => {
  return (
    <Box>
      <AppBar />
      <Box>
        <Routes>
          <Route path='catalog' element={<CatalogPage />}/>
        </Routes>
      </Box>
    </Box>
  )
}
export default MainLayout