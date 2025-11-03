import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Progress } from '../ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, AlertTriangle, Award } from 'lucide-react';

const chartData = [
  { month: 'Jan', score: 78 },
  { month: 'Feb', score: 82 },
  { month: 'Mar', score: 85 },
  { month: 'Apr', score: 83 },
  { month: 'May', score: 87 },
  { month: 'Jun', score: 89 }
];

const topStudents = [
  { name: 'Emma Thompson', score: 96, subject: 'Mathematics', avatar: 'ET' },
  { name: 'James Wilson', score: 94, subject: 'Science', avatar: 'JW' },
  { name: 'Sofia Chen', score: 92, subject: 'English', avatar: 'SC' },
  { name: 'Marcus Johnson', score: 91, subject: 'History', avatar: 'MJ' }
];

const needsImprovement = [
  { name: 'David Miller', score: 58, subject: 'Mathematics', avatar: 'DM' },
  { name: 'Lisa Anderson', score: 62, subject: 'Science', avatar: 'LA' },
  { name: 'Tom Brown', score: 65, subject: 'English', avatar: 'TB' }
];

const lowAttendanceStudents = [
  { name: 'Emily Smith', attendance: 82, parentEmail: 'sarah.smith@email.com', notified: true, avatar: 'ES' },
  { name: 'Michael Chen', attendance: 78, parentEmail: 'chen.parent@email.com', notified: true, avatar: 'MC' },
  { name: 'Jessica Davis', attendance: 84, parentEmail: 'davis.family@email.com', notified: true, avatar: 'JD' }
];

export function AdminDashboardHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Ramesh Kumar</h1>
        <p className="text-muted-foreground">Here's what's happening with your classes today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">
              +8 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.4%</div>
            <p className="text-xs text-green-600">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              Students above 90%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-red-600">
              Students below 70%
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Average Class Score Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Average Class Score Trend</CardTitle>
            <CardDescription>
              Monthly average scores across all subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={{ fill: '#2563eb' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Performing Students */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Students</CardTitle>
            <CardDescription>
              Students with highest scores this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div key={student.name} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium text-muted-foreground w-4">
                      #{index + 1}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-green-100 text-green-600">
                        {student.avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{student.name}</p>
                    <p className="text-xs text-muted-foreground">{student.subject}</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {student.score}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Low Attendance Alert */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span>Low Attendance Alerts (&lt;85%)</span>
          </CardTitle>
          <CardDescription>
            Students with attendance below 85% - parents automatically notified
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lowAttendanceStudents.map((student) => (
              <div key={student.name} className="flex items-center space-x-4 p-3 border border-orange-200 rounded-lg bg-orange-50">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-orange-100 text-orange-600">
                    {student.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-muted-foreground">Parent: {student.parentEmail}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={student.attendance} className="w-20" />
                  <Badge className="bg-orange-600">
                    {student.attendance}%
                  </Badge>
                </div>
                {student.notified && (
                  <Badge variant="outline" className="border-green-600 text-green-600">
                    ✓ Parent Notified
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Students Needing Improvement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span>Students Needing Improvement</span>
          </CardTitle>
          <CardDescription>
            Students scoring below 70% - require additional attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {needsImprovement.map((student) => (
              <div key={student.name} className="flex items-center space-x-4 p-3 border border-red-200 rounded-lg bg-red-50">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-red-100 text-red-600">
                    {student.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-muted-foreground">{student.subject}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress value={student.score} className="w-20" />
                  <Badge variant="destructive">
                    {student.score}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}