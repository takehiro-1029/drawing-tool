import React from "react"
import { Box } from "@mui/material";
import { DogImagePreview } from '~/components/Image/ImagePreview.component';

const ShowView: React.FC = () => {

  return (
    <Box>
      dog-apiから取得した犬の画像
      <DogImagePreview />
    </Box>
  )
}

export default ShowView
