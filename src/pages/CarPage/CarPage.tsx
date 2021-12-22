import { Box } from "@mui/material"
import { useParams  } from "react-router-dom"
import { useEffect } from "react"
import { carStore } from "../../stores/CarStore"

export const CarPage = () => {
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      carStore.getCarById(params.id)
    }
  }, [])

  if (params.id) console.log(carStore.getCarById(params.id))

  return (
    <Box className="car-page">
      {params.id}
    </Box>
  )
}