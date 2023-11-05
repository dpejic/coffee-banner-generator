import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import App from './App'

import './index.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools position="bottom" />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
)
