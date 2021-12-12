import { Box} from '@mui/material'
import './LoginLayout.scss'
import { Route, Routes } from "react-router-dom";
import LoginForm from "../../components/customized/LoginForm/LoginForm";
import RegisterForm from "../../components/customized/RegisterForm/RegisterForm";

const LoginLayout = () => {
  return (
    <Box className="login">
      <Routes>
        <Route
          path="login"
          element={<LoginForm />}
        />
        <Route
          path="register"
          element={<RegisterForm />}
        />
      </Routes>
    </Box>
  )
}
export default LoginLayout