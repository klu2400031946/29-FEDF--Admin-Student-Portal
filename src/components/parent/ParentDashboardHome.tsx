import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { 
  User, 
  TrendingUp, 
  Calendar, 
  Award,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

export function ParentDashboardHome() {
  const childInfo = {
    name: 'Emily Smith',
    studentId: 'STU123',
    grade: 'Grade 10',
    gpa: 3.8,
    attendance: 94
  };

  const recentActivities = [
    { subject: 'Mathematics', grade: 'A', date: '2024-01-15', status: 'excellent' },
    { subject: 'Science', grade: 'B+', date: '2024-01-14', status: 'good' },
    { subject: 'English', grade: 'A-', date: '2024-01-13', status: 'excellent' },
    { subject: 'History', grade: 'B', date: '2024-01-12', status: 'good' },
  ];

  const upcomingEvents = [
    { title: 'Parent-Teacher Conference', date: '2024-01-20', time: '2:00 PM' },
    { title: 'Science Project Due', date: '2024-01-22', time: '9:00 AM' },
    { title: 'Math Test', date: '2024-01-25', time: '10:00 AM' },
  ];

  const alerts = [
    { message: '⚠️ URGENT: Your child\'s attendance has dropped to 82%. Please ensure regular attendance to maintain academic performance.', type: 'urgent', date: '2024-01-16' },
    { message: 'Math assignment submitted late', type: 'warning', date: '2024-01-14' },
    { message: 'Excellent performance in Science project!', type: 'success', date: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
        <p className="text-muted-foreground">Monitor your child's academic progress and activities</p>
      </div>

      {/* Child Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5 text-blue-600" />
            <span>Student Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Student Name</p>
              <p className="text-xl font-semibold">{childInfo.name}</p>
              <p className="text-sm text-muted-foreground">{childInfo.studentId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Grade</p>
              <p className="text-xl font-semibold">{childInfo.grade}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current GPA</p>
              <p className="text-xl font-semibold text-green-600">{childInfo.gpa}</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                Above Average
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Attendance</p>
              <Progress value={childInfo.attendance} className="h-2" />
              <p className="text-sm font-medium mt-1">{childInfo.attendance}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-600" />
              <span>Recent Grades</span>
            </CardTitle>
            <CardDescription>Latest academic performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{activity.subject}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={activity.status === 'excellent' ? 'default' : 'secondary'}
                      className={activity.status === 'excellent' ? 'bg-green-600' : 'bg-blue-600'}
                    >
                      {activity.grade}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Upcoming Events</span>
            </CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts & Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <span>Recent Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-3 p-3 border rounded-lg ${
                  alert.type === 'urgent' ? 'border-red-500 bg-red-50' :
                  alert.type === 'warning' ? 'border-yellow-300 bg-yellow-50' : 'border-green-300 bg-green-50'
                }`}
              >
                {alert.type === 'urgent' ? (
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                ) : alert.type === 'warning' ? (
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className={`font-medium ${
                    alert.type === 'urgent' ? 'text-red-900' :
                    alert.type === 'warning' ? 'text-yellow-900' : 'text-green-900'
                  }`}>
                    {alert.message}
                  </p>
                  <p className="text-sm text-muted-foreground">{alert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Assignments Due</p>
              <p className="text-3xl font-bold text-blue-600">3</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Completed This Week</p>
              <p className="text-3xl font-bold text-green-600">8</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Average Grade</p>
              <p className="text-3xl font-bold text-blue-600">A-</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Class Rank</p>
              <p className="text-3xl font-bold text-green-600">12/120</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
