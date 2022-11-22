import React from "react"
import '~/App.css'
import { Box, Button } from "@mui/material";
import { EventSourcePolyfill } from 'event-source-polyfill';

type Res = {
  message_m: string
  staff_id: string
  message_id: string
}

const ServerSentEventView: React.FC = () => {

  const onClickExport = () => {
    const eventSource = new EventSourcePolyfill("url", {
      // https://github.com/Yaffle/EventSource/issues/143
      heartbeatTimeout: 120000,
    });
    eventSource.onmessage = (event) => {
      const res = JSON.parse(event.data) as Res
      console.log(res)
    };
    eventSource.onerror = (err) => {
      console.error("EventSource failed:", err);
    };
    // eventSource.addEventListener("event name", (event) => {
    //   console.log(JSON.parse(event.target));
    // });
  };

  return (
    <Box>
      <Button variant="contained" onClick={onClickExport}>
        server sent event
      </Button>
    </Box>
  )
}

export default ServerSentEventView
