import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Box className="form">
      <Typography variant="h4">
        Регистрация
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
      <TextField
        className="input"
        label="confirm password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        className="button"
        variant="outlined"
      >
        Продолжить
      </Button>

      <Link to="/auth/login">Вход</Link>
    </Box>
  )
}
export default RegisterForm