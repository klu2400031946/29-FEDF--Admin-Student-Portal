import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNavbar } from './TopNavbar';
import { StudentDashboardHome } from './student/StudentDashboardHome';
import { MyProgress } from './student/MyProgress';
import { StudentReports } from './student/StudentReports';
import { Improvement } from './student/Improvement';
import { AttendanceCalculator } from './student/AttendanceCalculator';
import { Page } from '../App';

interface StudentDashboardProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function StudentDashboard({ currentPage, onNavigate, onLogout }: StudentDashboardProps) {
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <StudentDashboardHome />;
      case 'my-progress':
        return <MyProgress />;
      case 'attendance-calculator':
        return <AttendanceCalculator />;
      case 'reports':
        return <StudentReports />;
      case 'improvement':
        return <Improvement />;
      default:
        return <StudentDashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage}
        onNavigate={onNavigate}
        onLogout={onLogout}
        userRole="student"
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar userRole="student" userName="Alex Johnson" />
        <main className="flex-1 overflow-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}