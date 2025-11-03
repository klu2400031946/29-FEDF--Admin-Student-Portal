import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { ParentDashboardHome } from './parent/ParentDashboardHome';
import { ChildProgress } from './parent/ChildProgress';
import { ParentReports } from './parent/ParentReports';
import { Communication } from './parent/Communication';
import { Page } from '../App';

interface ParentDashboardProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function ParentDashboard({ currentPage, onNavigate, onLogout }: ParentDashboardProps) {
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <ParentDashboardHome />;
      case 'child-progress':
        return <ChildProgress />;
      case 'reports':
        return <ParentReports />;
      case 'communication':
        return <Communication />;
      default:
        return <ParentDashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage}
        onNavigate={onNavigate}
        onLogout={onLogout}
        userRole="parent"
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar userRole="parent" userName="Sarah Smith" />
        <main className="flex-1 overflow-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
