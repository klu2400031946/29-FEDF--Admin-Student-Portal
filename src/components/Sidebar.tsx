import React from 'react';
import { cn } from './ui/utils';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  UserPlus, 
  BarChart3, 
  FileText, 
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  LogOut,
  GraduationCap,
  Users,
  MessageSquare,
  Calculator
} from 'lucide-react';
import { Page } from '../App';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  userRole: 'admin' | 'student' | 'parent';
}

export function Sidebar({ currentPage, onNavigate, onLogout, userRole }: SidebarProps) {
  const adminNavItems = [
    { page: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { page: 'add-student' as Page, label: 'Add Student Data', icon: UserPlus },
    { page: 'analytics' as Page, label: 'Analytics', icon: BarChart3 },
    { page: 'reports' as Page, label: 'Reports', icon: FileText },
    { page: 'recommendations' as Page, label: 'Recommendations', icon: Lightbulb },
  ];

  const studentNavItems = [
    { page: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { page: 'my-progress' as Page, label: 'My Progress', icon: TrendingUp },
    { page: 'attendance-calculator' as Page, label: 'Attendance Calculator', icon: Calculator },
    { page: 'reports' as Page, label: 'Reports', icon: FileText },
    { page: 'improvement' as Page, label: 'Improvement', icon: AlertTriangle },
  ];

  const parentNavItems = [
    { page: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { page: 'child-progress' as Page, label: 'Child Progress', icon: Users },
    { page: 'reports' as Page, label: 'Reports', icon: FileText },
    { page: 'communication' as Page, label: 'Communication', icon: MessageSquare },
  ];

  const navItems = userRole === 'admin' ? adminNavItems : userRole === 'student' ? studentNavItems : parentNavItems;

  return (
    <div className="w-64 bg-white border-r border-border h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold">EduTrack</h2>
            <p className="text-sm text-muted-foreground capitalize">{userRole}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.page}
              variant={currentPage === item.page ? "default" : "ghost"}
              className={cn(
                "w-full justify-start",
                currentPage === item.page && "bg-blue-600 text-white hover:bg-blue-700"
              )}
              onClick={() => onNavigate(item.page)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}