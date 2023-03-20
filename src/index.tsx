import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import ScrollToTop from './components/scrollToTop';

const a = document.getElementById('root');

// const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

a &&
  ReactDOM.createRoot(a).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </QueryClientProvider>,
  );
