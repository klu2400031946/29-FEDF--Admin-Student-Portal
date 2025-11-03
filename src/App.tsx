import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { StudentDashboard } from './components/StudentDashboard';
import { ParentDashboard } from './components/ParentDashboard';

export type UserRole = 'admin' | 'student' | 'parent' | null;
export type Page = 'login' | 'dashboard' | 'add-student' | 'analytics' | 'reports' | 'recommendations' | 'my-progress' | 'improvement' | 'child-progress' | 'communication' | 'attendance-calculator';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserRole>(null);
  const [currentPage, setCurrentPage] = useState<Page>('login');

  const handleLogin = (role: UserRole) => {
    setCurrentUser(role);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
  };

  if (currentUser === null) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {currentUser === 'admin' ? (
        <AdminDashboard 
          currentPage={currentPage}
          onNavigate={handleNavigation}
          onLogout={handleLogout}
        />
      ) : currentUser === 'student' ? (
        <StudentDashboard 
          currentPage={currentPage}
          onNavigate={handleNavigation}
          onLogout={handleLogout}
        />
      ) : (
        <ParentDashboard 
          currentPage={currentPage}
          onNavigate={handleNavigation}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}