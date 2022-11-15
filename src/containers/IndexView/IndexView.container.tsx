import React from "react"
import '~/App.css'
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { routePathMap } from "~/constants/routes.constant";

const IndexView: React.FC = () => {

  const nav = useNavigate();
  const transDrawView = () => {
    nav(routePathMap.draw.path, { replace: true });
  }
  const transDogImageView = () => {
    nav(routePathMap.show.path, { replace: true });
  }

  return (
    <Box>
      <Box>
        welcome
      </Box>
      <Box>
        <Button variant="contained" onClick={transDrawView}>
          use drawing tool
        </Button>
      </Box>
      <Box>
        <Button variant="contained" onClick={transDogImageView}>
          show dog image
        </Button>
      </Box>
    </Box>
  )
}

export default IndexView
