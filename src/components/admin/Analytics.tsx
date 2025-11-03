import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Calendar } from 'lucide-react';

const progressData = [
  { month: 'Aug', mathematics: 78, science: 82, english: 85, history: 80 },
  { month: 'Sep', mathematics: 82, science: 85, english: 87, history: 83 },
  { month: 'Oct', mathematics: 85, science: 88, english: 89, history: 86 },
  { month: 'Nov', mathematics: 88, science: 90, english: 91, history: 88 },
  { month: 'Dec', mathematics: 90, science: 92, english: 93, history: 90 },
  { month: 'Jan', mathematics: 92, science: 94, english: 95, history: 92 }
];

const subjectPerformance = [
  { subject: 'Mathematics', average: 85, color: '#2563eb' },
  { subject: 'Science', average: 88, color: '#16a34a' },
  { subject: 'English', average: 92, color: '#dc2626' },
  { subject: 'History', average: 84, color: '#ca8a04' },
  { subject: 'Geography', average: 82, color: '#9333ea' }
];

const gradeDistribution = [
  { grade: 'A+ (90-100)', count: 35, percentage: 28.2 },
  { grade: 'A (80-89)', count: 42, percentage: 33.9 },
  { grade: 'B (70-79)', count: 28, percentage: 22.6 },
  { grade: 'C (60-69)', count: 15, percentage: 12.1 },
  { grade: 'F (0-59)', count: 4, percentage: 3.2 }
];

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#6b7280'];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-muted-foreground">Comprehensive performance analysis and insights.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <Select defaultValue="semester1">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester1">Semester 1</SelectItem>
              <SelectItem value="semester2">Semester 2</SelectItem>
              <SelectItem value="year">Full Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-green-600">+3.2% vs last semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.8%</div>
            <p className="text-xs text-green-600">+1.5% vs last semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Subject</CardTitle>
            <PieChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">English</div>
            <p className="text-xs text-muted-foreground">92% average score</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Improvement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+4.7%</div>
            <p className="text-xs text-green-600">Monthly growth rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Over Time</CardTitle>
            <CardDescription>
              Subject-wise performance trends over the past 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="mathematics" stroke="#2563eb" strokeWidth={2} name="Mathematics" />
                <Line type="monotone" dataKey="science" stroke="#16a34a" strokeWidth={2} name="Science" />
                <Line type="monotone" dataKey="english" stroke="#dc2626" strokeWidth={2} name="English" />
                <Line type="monotone" dataKey="history" stroke="#ca8a04" strokeWidth={2} name="History" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Subject-wise Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Performance</CardTitle>
            <CardDescription>
              Average scores across different subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectPerformance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="subject" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="average" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
            <CardDescription>
              Distribution of student grades across all subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percentage }) => `${percentage.toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {gradeDistribution.map((item, index) => (
                <div key={item.grade} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span>{item.grade}</span>
                  </div>
                  <span className="font-medium">{item.count} students</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Insights</CardTitle>
            <CardDescription>
              Key insights and trends from the data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800">Positive Trends</h4>
                <ul className="mt-2 text-sm text-green-700 space-y-1">
                  <li>• English scores improved by 8% this semester</li>
                  <li>• 96.8% pass rate - highest in 3 years</li>
                  <li>• Mathematics performance trending upward</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800">Areas for Attention</h4>
                <ul className="mt-2 text-sm text-yellow-700 space-y-1">
                  <li>• Geography scores below target (82%)</li>
                  <li>• 8 students consistently underperforming</li>
                  <li>• Need more focus on practical science</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800">Recommendations</h4>
                <ul className="mt-2 text-sm text-blue-700 space-y-1">
                  <li>• Implement peer tutoring program</li>
                  <li>• Additional geography lab sessions</li>
                  <li>• Continue current English methodology</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}