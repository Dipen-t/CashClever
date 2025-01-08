import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LoginPage from './pages/login';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Savings from './pages/Savings';
import Payments from './pages/Payments';
import Learn from './pages/Learn';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// Shared Components
import Navbar from './components/shared/Navbar';
import Sidebar from './components/shared/Sidebar';
import ErrorBoundary from './components/shared/ErrorBoundary';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { GameProvider } from './context/GameContext';

function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-primary-light to-primary-lighter">
      <Sidebar />
      <div className="flex flex-1 flex-col md:pl-72">
        <Navbar />
        <main className="flex-1 px-4 pb-20 md:px-8 md:pb-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <GameProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
              <Route path="/expenses" element={<MainLayout><Expenses /></MainLayout>} />
              <Route path="/savings" element={<MainLayout><Savings /></MainLayout>} />
              <Route path="/payments" element={<MainLayout><Payments /></MainLayout>} />
              <Route path="/learn" element={<MainLayout><Learn /></MainLayout>} />
              <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
              <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
            </Routes>
          </Router>
        </GameProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

