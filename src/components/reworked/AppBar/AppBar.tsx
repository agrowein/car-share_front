import {
  AppBar as Appbar,
  Button,
  Toolbar, Typography,
} from '@mui/material'
import CarRentalIcon from '@mui/icons-material/CarRental'
import { Link, useNavigate } from 'react-router-dom'
import './AppBar.scss'

const AppBar = () => {
  const navigateTo = useNavigate()

  return (
    <Appbar
      className="appbar"
      position="sticky"
    >
      <Toolbar className="toolbar">
        <Link
          className="nice-look-link"
          to="/"
        >
          <CarRentalIcon fontSize="large" />
          <Typography variant="h4">
            Car Share
          </Typography>
        </Link>

        <Button
          color="inherit"
          onClick={() => navigateTo('/auth/login')}
        >Войти</Button>
      </Toolbar>
    </Appbar>
  )
}

export default AppBar