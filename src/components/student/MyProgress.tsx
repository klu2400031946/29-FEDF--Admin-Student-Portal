import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, Minus, BookOpen, Target } from 'lucide-react';

const subjectPerformance = [
  { subject: 'Mathematics', current: 92, previous: 88, target: 95, color: '#2563eb' },
  { subject: 'Science', current: 89, previous: 85, target: 90, color: '#16a34a' },
  { subject: 'English', current: 95, previous: 92, target: 96, color: '#dc2626' },
  { subject: 'History', current: 87, previous: 90, target: 92, color: '#ca8a04' },
  { subject: 'Geography', current: 82, previous: 80, target: 85, color: '#9333ea' }
];

const radarData = [
  { subject: 'Math', current: 92, target: 95 },
  { subject: 'Science', current: 89, target: 90 },
  { subject: 'English', current: 95, target: 96 },
  { subject: 'History', current: 87, target: 92 },
  { subject: 'Geography', current: 82, target: 85 }
];

const monthlyProgress = [
  { month: 'Aug', mathematics: 78, science: 82, english: 85, history: 80, geography: 75 },
  { month: 'Sep', mathematics: 82, science: 85, english: 87, history: 83, geography: 78 },
  { month: 'Oct', mathematics: 85, science: 88, english: 89, history: 86, geography: 80 },
  { month: 'Nov', mathematics: 88, science: 90, english: 91, history: 88, geography: 81 },
  { month: 'Dec', mathematics: 90, science: 92, english: 93, history: 89, geography: 82 },
  { month: 'Jan', mathematics: 92, science: 89, english: 95, history: 87, geography: 82 }
];

const skillAreas = [
  { area: 'Problem Solving', score: 88, trend: 'up' },
  { area: 'Critical Thinking', score: 92, trend: 'up' },
  { area: 'Communication', score: 94, trend: 'up' },
  { area: 'Research Skills', score: 85, trend: 'down' },
  { area: 'Time Management', score: 78, trend: 'same' }
];

export function MyProgress() {
  const getTrendIcon = (current: number, previous: number) => {
    if (current > previous) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (current < previous) return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getTrendText = (current: number, previous: number) => {
    const diff = current - previous;
    if (diff > 0) return `+${diff}%`;
    if (diff < 0) return `${diff}%`;
    return 'No change';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Progress</h1>
          <p className="text-muted-foreground">Track your academic performance across all subjects.</p>
        </div>
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

      {/* Subject Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>
              Current scores vs. previous month and targets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectPerformance.map((subject) => (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: subject.color }}
                      />
                      <span className="font-medium">{subject.subject}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(subject.current, subject.previous)}
                      <span className="text-sm text-muted-foreground">
                        {getTrendText(subject.current, subject.previous)}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Current: {subject.current}%</span>
                      <span>Target: {subject.target}%</span>
                    </div>
                    <Progress 
                      value={(subject.current / subject.target) * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
            <CardDescription>
              Current performance vs. target goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Radar
                  name="Target"
                  dataKey="target"
                  stroke="#dc2626"
                  fill="transparent"
                  strokeWidth={2}
                  strokeDasharray="5,5"
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
          <CardDescription>
            Subject-wise performance trends over the past 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Bar dataKey="mathematics" fill="#2563eb" name="Mathematics" />
              <Bar dataKey="science" fill="#16a34a" name="Science" />
              <Bar dataKey="english" fill="#dc2626" name="English" />
              <Bar dataKey="history" fill="#ca8a04" name="History" />
              <Bar dataKey="geography" fill="#9333ea" name="Geography" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>Key Skills</span>
            </CardTitle>
            <CardDescription>
              Your strength areas and development needs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillAreas.map((skill, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-medium">{skill.area}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        {skill.trend === 'up' && <TrendingUp className="h-3 w-3 text-green-500" />}
                        {skill.trend === 'down' && <TrendingDown className="h-3 w-3 text-red-500" />}
                        {skill.trend === 'same' && <Minus className="h-3 w-3 text-gray-500" />}
                        <span className="text-xs text-muted-foreground">
                          {skill.trend === 'up' ? 'Improving' : skill.trend === 'down' ? 'Needs work' : 'Stable'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{skill.score}%</div>
                    <Progress value={skill.score} className="w-16 h-1 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Personal Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              <span>Personal Goals</span>
            </CardTitle>
            <CardDescription>
              Your academic targets for this semester
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-green-800">Maintain Honor Roll</h4>
                  <Badge className="bg-green-600">On Track</Badge>
                </div>
                <p className="text-sm text-green-700">Keep GPA above 3.5</p>
                <Progress value={85} className="mt-2" />
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-blue-800">Improve Mathematics</h4>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
                <p className="text-sm text-blue-700">Reach 95% average</p>
                <Progress value={75} className="mt-2" />
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-yellow-800">Perfect Attendance</h4>
                  <Badge className="bg-yellow-600">Needs Focus</Badge>
                </div>
                <p className="text-sm text-yellow-700">100% attendance rate</p>
                <Progress value={94} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}