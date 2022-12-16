import React from "react"
import { Box, Button } from "@mui/material";
import { useServerSentEvent } from "~/infra/serverSentEvent.infra";

const ServerSentEventView: React.FC = () => {

  return (
    <Box>
      <Button variant="contained" onClick={useServerSentEvent}>
        server sent event
      </Button>
    </Box>
  )
}

export default ServerSentEventView
