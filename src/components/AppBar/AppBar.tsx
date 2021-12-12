import {
  AppBar as App,
  Button,
  Toolbar,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AppBar = () => {
  const history = useNavigate()

  return (
    <App position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Car Share
        </Typography>
        <Button
          color="inherit"
          onClick={() => history('/login')}
        >Войти</Button>
      </Toolbar>
    </App>
  )
}

export default AppBar