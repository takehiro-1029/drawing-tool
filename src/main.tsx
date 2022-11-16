import { Console } from 'console'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from "swr"
import App from '~/containers/App/App.container'
import { apiMockWorker } from '~/infra/mocks/index.infra';
import './index.css'

/**
 * mockモードでのみmock apiを利用する
 */
if (import.meta.env.VITE_API_MOCK === "true") {
  apiMockWorker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SWRConfig>
  </React.StrictMode>
)
