import { Box, Button } from "@mui/material"
import "./CarCard.scss"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";

export type CarCardProp = {
  id: number | string
}

export const CarCard = ({
  id,
}: CarCardProp) => {
  const navigate = useNavigate()
  useEffect(() => {

  }, [])

  const handleClick = () => {
    navigate(`/cars/${id}`)
  }

  return (
    <Box
      className="car-card"
      onClick={handleClick}
    >
      <img
        className="image"
        src={"https://i.ucrazy.ru/files/i/2012.12.21/1356091045_id428025sw1920w1920h1080.jpg"}
        alt="Автомобиль"
      />
      <Box className="info">
        <Box className="main">
          <span className="brand">Марка</span>
          <span className="model">Модель</span>
        </Box>
        <Box className="secondary">
          <span>цвет</span>
          <span>тип кузова</span>
          <span>год</span>
        </Box>
        <Box className="payment">
          <span>Цена:</span>
          <span className="cost">100</span>
        </Box>
      </Box>
      <Button variant="outlined">Арендовать</Button>
    </Box>
  )
}