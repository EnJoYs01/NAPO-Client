import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
