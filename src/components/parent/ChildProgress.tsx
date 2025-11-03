import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { TrendingUp, BookOpen, Clock, AlertTriangle } from 'lucide-react';

export function ChildProgress() {
  const gradeData = [
    { month: 'Sep', gpa: 3.5 },
    { month: 'Oct', gpa: 3.6 },
    { month: 'Nov', gpa: 3.7 },
    { month: 'Dec', gpa: 3.8 },
    { month: 'Jan', gpa: 3.8 },
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', score: 92, attendance: 95 },
    { subject: 'Science', score: 88, attendance: 93 },
    { subject: 'English', score: 95, attendance: 96 },
    { subject: 'History', score: 85, attendance: 92 },
    { subject: 'Geography', score: 90, attendance: 94 },
    { subject: 'Physics', score: 87, attendance: 91 },
  ];

  const skillsData = [
    { skill: 'Problem Solving', score: 90 },
    { skill: 'Critical Thinking', score: 85 },
    { skill: 'Communication', score: 92 },
    { skill: 'Teamwork', score: 88 },
    { skill: 'Creativity', score: 87 },
    { skill: 'Time Management', score: 83 },
  ];

  const attendanceData = [
    { month: 'Sep', attendance: 92 },
    { month: 'Oct', attendance: 94 },
    { month: 'Nov', attendance: 93 },
    { month: 'Dec', attendance: 95 },
    { month: 'Jan', attendance: 94 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Child Progress</h1>
        <p className="text-muted-foreground">Detailed academic performance and development tracking</p>
      </div>

      {/* Low Attendance Warning */}
      <Alert variant="destructive" className="border-red-500 bg-red-50">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>⚠️ Low Attendance Alert</AlertTitle>
        <AlertDescription>
          Your child's attendance (82%) is below the required 85% threshold. Please ensure regular attendance to maintain academic performance and avoid potential academic issues.
        </AlertDescription>
      </Alert>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall GPA</p>
                <p className="text-3xl font-bold text-blue-600">3.8</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.3 from last semester
                </p>
              </div>
              <TrendingUp className="h-10 w-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-3xl font-bold text-green-600">89.5%</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Across all subjects
                </p>
              </div>
              <BookOpen className="h-10 w-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-300">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
                <p className="text-3xl font-bold text-red-600">82%</p>
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Below threshold (85%)
                </p>
              </div>
              <Clock className="h-10 w-10 text-red-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Progress Tabs */}
      <Tabs defaultValue="academic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="academic">Academic Performance</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="academic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GPA Trend */}
            <Card>
              <CardHeader>
                <CardTitle>GPA Trend</CardTitle>
                <CardDescription>GPA progression over the academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={gradeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 4]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="gpa" 
                      stroke="#2563eb" 
                      strokeWidth={2}
                      name="GPA"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Subject Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Current scores across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" angle={-45} textAnchor="end" height={100} />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#2563eb" name="Score %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Subject Details */}
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Details</CardTitle>
              <CardDescription>Performance and attendance breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <p className="font-medium">{subject.subject}</p>
                        <Badge 
                          variant={subject.score >= 90 ? 'default' : 'secondary'}
                          className={subject.score >= 90 ? 'bg-green-600' : 'bg-blue-600'}
                        >
                          {subject.score}%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Attendance: {subject.attendance}%</p>
                    </div>
                    <Progress value={subject.score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trend</CardTitle>
              <CardDescription>Monthly attendance rate</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="attendance" fill="#10b981" name="Attendance %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Present Days</span>
                  <span className="font-semibold">142 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Absent Days</span>
                  <span className="font-semibold">9 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Days</span>
                  <span className="font-semibold">151 days</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Attendance Rate</span>
                    <span className="font-bold text-green-600">94%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Absence Reasons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>Illness</span>
                  <Badge variant="secondary">5 days</Badge>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>Family Emergency</span>
                  <Badge variant="secondary">2 days</Badge>
                </div>
                <div className="flex justify-between items-center p-2 border rounded">
                  <span>School Events</span>
                  <Badge variant="secondary">2 days</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills Radar</CardTitle>
                <CardDescription>Overall skill assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={skillsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar 
                      name="Score" 
                      dataKey="score" 
                      stroke="#2563eb" 
                      fill="#2563eb" 
                      fillOpacity={0.6} 
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills Breakdown</CardTitle>
                <CardDescription>Detailed skill scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{skill.skill}</p>
                        <Badge 
                          variant={skill.score >= 90 ? 'default' : 'secondary'}
                          className={skill.score >= 90 ? 'bg-green-600' : 'bg-blue-600'}
                        >
                          {skill.score}%
                        </Badge>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
