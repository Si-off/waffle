import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import './shared/styles/global/normalize.css';
import './shared/styles/global/global.css';
import App from './App';
import theme from './shared/styles/global/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { getClient } from './shared/service/queries';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = getClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
