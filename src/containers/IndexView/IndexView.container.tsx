import React from "react"
import '~/App.css'
import { useNavigate } from "react-router-dom";
import { Button, Box, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { routePathMap } from "~/constants/routes.constant";

const IndexView: React.FC = () => {

  const nav = useNavigate();
  const transDrawView = () => {
    nav(routePathMap.draw.path, { replace: true });
  }
  const transDogImageView = () => {
    nav(routePathMap.show.path, { replace: true });
  }
  const transServerSentEventView = () => {
    nav(routePathMap.server_sent_event.path, { replace: true });
  }
  const transWebSocketView = () => {
    nav(routePathMap.web_socket.path, { replace: true });
  }

  return (
    <Box>
      <Box sx={{ height: 50 }}>
        welcome
      </Box>
      <Stack direction="row" spacing={10}>
        <Button variant="text" color="secondary" size="small" onClick={transDrawView} >
          use drawing tool
        </Button>
        <Button variant="contained" onClick={transDogImageView}>
          show dog image
        </Button>
        <Button variant="outlined" endIcon={<SendIcon />} onClick={transServerSentEventView}>
          server sent event
        </Button>
        <Button variant="text" endIcon={<SendIcon />} onClick={transWebSocketView}>
          web socket
        </Button>
      </Stack>
    </Box >
  )
}

export default IndexView
