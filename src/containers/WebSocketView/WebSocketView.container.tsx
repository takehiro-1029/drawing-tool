import React from "react"
import '~/App.css'
import { Box, Button } from "@mui/material";
import { WebsocketBuilder } from 'websocket-ts';

const ws = new WebsocketBuilder('ws://sample.com')
  .onOpen((i, ev) => { console.log("opened") })
  .onClose((i, ev) => { console.log("closed") })
  .onError((i, ev) => { console.log("error") })
  .onMessage((i, ev) => { console.log("message") })
  .onRetry((i, ev) => { console.log("retry") })
  .build();

const WebSocketView: React.FC = () => {

  const sendMessage = () => {
    ws.send("送った。");
  }

  return (
    <Box>
      <Button variant="contained" onClick={sendMessage}>
        server sent event
      </Button>
    </Box>
  )
}

export default WebSocketView
