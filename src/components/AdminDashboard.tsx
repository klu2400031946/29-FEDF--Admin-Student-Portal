import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { AdminDashboardHome } from './admin/AdminDashboardHome';
import { AddStudentData } from './admin/AddStudentData';
import { Analytics } from './admin/Analytics';
import { Reports } from './admin/Reports';
import { Recommendations } from './admin/Recommendations';
import { Page } from '../App';

interface AdminDashboardProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function AdminDashboard({ currentPage, onNavigate, onLogout }: AdminDashboardProps) {
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <AdminDashboardHome />;
      case 'add-student':
        return <AddStudentData />;
      case 'analytics':
        return <Analytics />;
      case 'reports':
        return <Reports />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return <AdminDashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage}
        onNavigate={onNavigate}
        onLogout={onLogout}
        userRole="admin"
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar userRole="admin" userName="Ramesh Kumar" />
        <main className="flex-1 overflow-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}