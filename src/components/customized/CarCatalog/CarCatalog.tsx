import { Box } from "@mui/material"
import { CarCard } from "../CarCard/CarCard";
import "./CarCatalog.scss"
import { useEffect } from "react";
import { carStore } from "../../../stores/CarStore";
export const CarCatalog = () => {
  const test = Array.apply(null, Array(10))

  useEffect(() => {
    carStore.loadCars().then(() => {})
  }, [])

  return (
    <Box className="catalog">
      {test.map((el, i) => <CarCard id={i} />)}
    </Box>
  )
}