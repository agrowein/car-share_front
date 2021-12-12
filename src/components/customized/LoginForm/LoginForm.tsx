import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Box className="form">
      <Typography variant="h4">
        Авторизация
      </Typography>
      <TextField
        className="input"
        label="e-mail"
      />
      <TextField
        className="input"
        label="password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        className="button"
        variant="outlined"
      >
        Продолжить
      </Button>

      <Link to="/auth/register">Регистрация</Link>
    </Box>
  )
}

export default LoginForm