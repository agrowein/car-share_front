import {
  AppBar as App,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Toolbar,
  Typography
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const AppBar = () => {
  const history = useNavigate()

  return (
    <App position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
        >
          <Link to="/">Car Share</Link>
        </Typography>
        <BottomNavigation>
          <BottomNavigationAction label="Recents" />
        </BottomNavigation>
        <Button
          color="inherit"
          onClick={() => history('/login')}
        >Войти</Button>
      </Toolbar>
    </App>
  )
}

export default AppBar