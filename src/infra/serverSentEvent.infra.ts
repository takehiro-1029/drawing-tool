import { EventSourcePolyfill } from 'event-source-polyfill';
import { MessageModel } from "~/models/Message.model";

const sseUrl = "baseurl"
const timeoutMilliSec = 1000 * 120

export const useServerSentEvent = () => {
    const eventSource = new EventSourcePolyfill(sseUrl, {
      headers: {
        'Authorization': 'Bearer token'
      },
      // https://github.com/Yaffle/EventSource/issues/143
      heartbeatTimeout: timeoutMilliSec,
    });
    eventSource.onmessage = (event) => {
      const res = JSON.parse(event.data) as MessageModel
      console.log(res);
    };
    eventSource.onerror = (err) => {
      console.error("EventSource failed:", err);
    };
    // eventSource.addEventListener("event name", (event) => {
    //   console.log(JSON.parse(event.target));
    // });
  };

