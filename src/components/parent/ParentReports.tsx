import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Download, FileText, Calendar, TrendingUp } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ParentReports() {
  const reports = [
    {
      title: 'First Semester Progress Report',
      date: '2024-01-15',
      type: 'Progress Report',
      status: 'Available',
      gpa: 3.8,
      summary: 'Excellent performance across all subjects with particular strength in English and Mathematics.'
    },
    {
      title: 'December Monthly Report',
      date: '2024-01-05',
      type: 'Monthly Report',
      status: 'Available',
      gpa: 3.8,
      summary: 'Consistent performance with strong attendance record.'
    },
    {
      title: 'Mid-Term Assessment Report',
      date: '2023-11-20',
      type: 'Assessment Report',
      status: 'Available',
      gpa: 3.7,
      summary: 'Good improvement in Science and History subjects.'
    },
    {
      title: 'November Monthly Report',
      date: '2023-11-05',
      type: 'Monthly Report',
      status: 'Available',
      gpa: 3.7,
      summary: 'Above average performance with room for improvement in attendance.'
    },
    {
      title: 'First Quarter Report Card',
      date: '2023-10-15',
      type: 'Report Card',
      status: 'Available',
      gpa: 3.6,
      summary: 'Strong start to the academic year with consistent grades.'
    },
  ];

  const upcomingReports = [
    { title: 'February Monthly Report', dueDate: '2024-02-05', type: 'Monthly Report' },
    { title: 'Second Semester Mid-Term', dueDate: '2024-02-20', type: 'Assessment Report' },
  ];

  const handleDownload = (reportTitle: string) => {
    toast.success(`Downloading: ${reportTitle}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-muted-foreground">Access and download your child's academic reports</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Available Reports</p>
              <p className="text-3xl font-bold text-blue-600">{reports.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Latest GPA</p>
              <p className="text-3xl font-bold text-green-600">3.8</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">GPA Trend</p>
              <p className="text-3xl font-bold text-green-600 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                +0.2
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>Upcoming Reports</span>
          </CardTitle>
          <CardDescription>Reports scheduled to be published soon</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">{report.title}</p>
                    <p className="text-sm text-muted-foreground">{report.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary">Expected: {report.dueDate}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Available Reports</span>
          </CardTitle>
          <CardDescription>Download your child's academic reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{report.title}</h3>
                      <Badge variant="secondary">{report.type}</Badge>
                      <Badge className="bg-green-600">{report.status}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {report.date}
                      </span>
                      <span className="flex items-center">
                        GPA: <span className="font-semibold ml-1 text-blue-600">{report.gpa}</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{report.summary}</p>
                  </div>
                  <Button 
                    onClick={() => handleDownload(report.title)}
                    className="ml-4 bg-blue-600 hover:bg-blue-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Information */}
      <Card>
        <CardHeader>
          <CardTitle>About Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              <strong>Progress Reports:</strong> Comprehensive semester reports including grades, attendance, and teacher feedback.
            </p>
            <p className="text-muted-foreground">
              <strong>Monthly Reports:</strong> Quick overview of monthly academic performance and attendance.
            </p>
            <p className="text-muted-foreground">
              <strong>Assessment Reports:</strong> Mid-term and final exam results with detailed subject-wise breakdown.
            </p>
            <p className="text-muted-foreground">
              Reports are typically available within 5 business days after the assessment or reporting period ends.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
