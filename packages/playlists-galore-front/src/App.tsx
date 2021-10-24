import React from 'react';
import { ContextProvider } from '@/context';
import AppErrorBoundary from '@/components/AppErrorBoundary';
import HomePage from '@/components/HomePage';

function App() {
  return (
    <AppErrorBoundary>
      <ContextProvider>
        <HomePage />
      </ContextProvider>
    </AppErrorBoundary>
  );
}

export default App;
