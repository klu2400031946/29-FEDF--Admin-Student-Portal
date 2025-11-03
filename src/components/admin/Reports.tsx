import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { toast } from 'sonner@2.0.3';
import { Download, Search, Filter, FileText, FileSpreadsheet } from 'lucide-react';

const studentResults = [
  { id: 'STU001', name: 'Emma Thompson', grade: '10A', mathematics: 96, science: 94, english: 98, history: 92, average: 95.0, status: 'Excellent' },
  { id: 'STU002', name: 'James Wilson', grade: '10A', mathematics: 88, science: 92, english: 90, history: 85, average: 88.8, status: 'Good' },
  { id: 'STU003', name: 'Sofia Chen', grade: '10B', mathematics: 92, science: 89, english: 94, history: 90, average: 91.3, status: 'Excellent' },
  { id: 'STU004', name: 'Marcus Johnson', grade: '10A', mathematics: 78, science: 82, english: 85, history: 80, average: 81.3, status: 'Good' },
  { id: 'STU005', name: 'Lisa Anderson', grade: '10B', mathematics: 65, science: 68, english: 72, history: 70, average: 68.8, status: 'Needs Improvement' },
  { id: 'STU006', name: 'David Miller', grade: '10A', mathematics: 58, science: 62, english: 65, history: 60, average: 61.3, status: 'Needs Improvement' },
  { id: 'STU007', name: 'Sarah Wilson', grade: '10B', mathematics: 94, science: 96, english: 92, history: 89, average: 92.8, status: 'Excellent' },
  { id: 'STU008', name: 'Tom Brown', grade: '10A', mathematics: 72, science: 75, english: 78, history: 74, average: 74.8, status: 'Satisfactory' }
];

export function Reports() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleDownloadPDF = () => {
    toast.success('PDF report downloaded successfully!');
  };

  const handleDownloadCSV = () => {
    toast.success('CSV report downloaded successfully!');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Excellent':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Excellent</Badge>;
      case 'Good':
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Good</Badge>;
      case 'Satisfactory':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Satisfactory</Badge>;
      case 'Needs Improvement':
        return <Badge variant="destructive">Needs Improvement</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredResults = studentResults.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = selectedGrade === 'all' || student.grade === selectedGrade;
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    
    return matchesSearch && matchesGrade && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-muted-foreground">Student results and performance reports.</p>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Student Results</span>
            <div className="flex space-x-2">
              <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button onClick={handleDownloadCSV} variant="outline" size="sm">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Download CSV
              </Button>
            </div>
          </CardTitle>
          <CardDescription>
            View and export student performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name or student ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="10A">Grade 10A</SelectItem>
                <SelectItem value="10B">Grade 10B</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Excellent">Excellent</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Satisfactory">Satisfactory</SelectItem>
                <SelectItem value="Needs Improvement">Needs Improvement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead className="text-center">Math</TableHead>
                  <TableHead className="text-center">Science</TableHead>
                  <TableHead className="text-center">English</TableHead>
                  <TableHead className="text-center">History</TableHead>
                  <TableHead className="text-center">Average</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell className="text-center">{student.mathematics}%</TableCell>
                    <TableCell className="text-center">{student.science}%</TableCell>
                    <TableCell className="text-center">{student.english}%</TableCell>
                    <TableCell className="text-center">{student.history}%</TableCell>
                    <TableCell className="text-center font-medium">{student.average}%</TableCell>
                    <TableCell>{getStatusBadge(student.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No students found matching the current filters.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredResults.length}</div>
            <p className="text-xs text-muted-foreground">
              Matching current filters
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredResults.length > 0 
                ? (filteredResults.reduce((sum, student) => sum + student.average, 0) / filteredResults.length).toFixed(1)
                : '0'}%
            </div>
            <p className="text-xs text-muted-foreground">
              Average performance
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Excellent</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {filteredResults.filter(s => s.status === 'Excellent').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Students performing excellently
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Need Support</CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {filteredResults.filter(s => s.status === 'Needs Improvement').length}
            </div>
            <p className="text-xs text-muted-foreground">
              Students needing improvement
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}