import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner@2.0.3';
import { Download, FileText, Calendar, Award, TrendingUp } from 'lucide-react';

const reportCards = [
  {
    period: 'Fall 2024 - Final Report',
    date: 'January 15, 2025',
    gpa: 3.7,
    rank: '7th out of 124',
    status: 'Honor Roll',
    subjects: [
      { name: 'Mathematics', grade: 'A-', score: 92, credits: 4 },
      { name: 'Science', grade: 'A-', score: 89, credits: 4 },
      { name: 'English', grade: 'A+', score: 95, credits: 3 },
      { name: 'History', grade: 'A-', score: 87, credits: 3 },
      { name: 'Geography', grade: 'B+', score: 82, credits: 3 }
    ]
  },
  {
    period: 'Fall 2024 - Mid-term Report',
    date: 'November 15, 2024',
    gpa: 3.5,
    rank: '12th out of 124',
    status: 'Good Standing',
    subjects: [
      { name: 'Mathematics', grade: 'B+', score: 88, credits: 4 },
      { name: 'Science', grade: 'A-', score: 90, credits: 4 },
      { name: 'English', grade: 'A', score: 92, credits: 3 },
      { name: 'History', grade: 'A-', score: 90, credits: 3 },
      { name: 'Geography', grade: 'B', score: 80, credits: 3 }
    ]
  }
];

const achievements = [
  { title: 'Honor Roll', description: 'Fall 2024 Semester', date: 'January 2025', type: 'academic' },
  { title: 'Most Improved Student', description: 'Mathematics Department', date: 'December 2024', type: 'improvement' },
  { title: 'Perfect Attendance', description: 'December 2024', date: 'December 2024', type: 'attendance' },
  { title: 'English Essay Competition', description: '2nd Place', date: 'November 2024', type: 'competition' }
];

export function StudentReports() {
  const handleDownloadReport = (period: string) => {
    toast.success(`Downloaded report: ${period}`);
  };

  const handleDownloadTranscript = () => {
    toast.success('Official transcript downloaded successfully!');
  };

  const getGradeColor = (grade: string) => {
    if (grade.includes('A+')) return 'bg-green-600';
    if (grade.includes('A')) return 'bg-green-500';
    if (grade.includes('B+')) return 'bg-blue-500';
    if (grade.includes('B')) return 'bg-blue-400';
    return 'bg-gray-500';
  };

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <Award className="h-4 w-4 text-yellow-500" />;
      case 'improvement':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'attendance':
        return <Calendar className="h-4 w-4 text-blue-500" />;
      case 'competition':
        return <Award className="h-4 w-4 text-purple-500" />;
      default:
        return <Award className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Reports</h1>
          <p className="text-muted-foreground">Access your academic reports and achievements.</p>
        </div>
        <Button onClick={handleDownloadTranscript} className="bg-blue-600 hover:bg-blue-700">
          <FileText className="mr-2 h-4 w-4" />
          Download Official Transcript
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Current GPA</p>
                <p className="text-2xl font-bold">3.7</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-sm font-medium">Class Rank</p>
                <p className="text-2xl font-bold">7th</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Attendance</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Achievements</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Cards */}
      <div className="space-y-6">
        {reportCards.map((report, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{report.period}</CardTitle>
                  <CardDescription>Generated on {report.date}</CardDescription>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <Badge className={report.status === 'Honor Roll' ? 'bg-green-600' : 'bg-blue-600'}>
                        {report.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      GPA: {report.gpa} • Rank: {report.rank}
                    </p>
                  </div>
                  <Button onClick={() => handleDownloadReport(report.period)} size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {report.subjects.map((subject, subIndex) => (
                  <div key={subIndex} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{subject.name}</h4>
                      <Badge className={getGradeColor(subject.grade)}>
                        {subject.grade}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Score: {subject.score}%</span>
                        <span>Credits: {subject.credits}</span>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-yellow-500" />
            <span>Achievements & Awards</span>
          </CardTitle>
          <CardDescription>
            Your academic achievements and recognitions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="p-2 bg-gray-100 rounded-lg">
                  {getAchievementIcon(achievement.type)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
          <CardDescription>
            Overall academic progress and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Strengths</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Consistent improvement in Mathematics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Excellent performance in English</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Strong attendance record</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Areas for Improvement</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-sm">Focus more on Geography concepts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-sm">Participate more in class discussions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-sm">Submit assignments earlier</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}